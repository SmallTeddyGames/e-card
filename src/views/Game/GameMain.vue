<script lang="ts" setup>
import { useMediaQuery } from '@vueuse/core'
import GameIcon from '@/views/Component/GameIcon.vue'
import GameInformation from '@/views/Component/GameInformation.vue'
import ComputedCard from '@/views/Component/ComputedCard.vue'
import PlayerCard from '@/views/Component/PlayerCard.vue'
import GameMenu from '@/views/Component/GameMenu.vue'
import CheckCard from '@/views/Component/CheckCard.vue'
import DropCard from '@/views/Component/DropCard.vue';
import SettlePanel from '@/views/Component/SettlePanel.vue';
import type { CardItem, LogItem } from '@/views/Type'
import { deepClone, nextRounds, aiChooseCard, recordPlayerPlay, recordComputerPlay, getAiThinkDelay, settleBeans, checkBankruptcy, playSound, initRounds } from '@/utils'

// 全局信息变量
const state = useGlobalState()
// 游戏信息Ref
const showGameMenuRef = ref<InstanceType<typeof GameMenu>>(null)
// 玩家角色
const playerRole = computed(() => state.value.playerRole)
// 玩家当前打出的卡片信息
const playerCardInfo: Ref<CardItem> | null = ref()
// 电脑当前打出的卡片信息
const computerCardInfo: Ref<CardItem> | null = ref()
// 结算面板显示
const showSettle = ref(false)
// 对战状态
const isRevealed = ref(false)
const isImpact = ref(false)
const playerWinner = ref(false)
const playerLoser = ref(false)
const computerWinner = ref(false)
const computerLoser = ref(false)
// 屏幕震动
const screenShake = ref(false)
const busy = ref(false)
const mobileInfo = ref(false)
const compact = useMediaQuery('(max-width: 1099px), (max-height: 600px)')
const infoDialog = ref<HTMLDialogElement | null>(null)
const menuVisible = computed(() => showGameMenuRef.value?.show ?? true)
const playerScore = computed(() => state.value.gameLogItems.reduce((sum, item) => sum + (item.playerScore || 0), 0))
const computerScore = computed(() => state.value.gameLogItems.reduce((sum, item) => sum + (item.computerScore || 0), 0))
watch([mobileInfo, compact], async ([open, isCompact]) => {
  await nextTick()
  if (open && isCompact && !infoDialog.value?.open) infoDialog.value?.showModal()
  else if (infoDialog.value?.open) infoDialog.value.close()
})


/**
 * 进行检查
 */
const playerCardCheck = (cardInfo: CardItem): void => {
  if (busy.value || state.value.gameState !== 'start' || showGameMenuRef.value?.show) {
    return;
  }
  busy.value = true
  if (playerCardInfo.value) {
    state.value.dropedCardItems.push(playerCardInfo.value, computerCardInfo.value);
  }

  // 重置对战状态
  isRevealed.value = false
  isImpact.value = false
  playerWinner.value = false
  playerLoser.value = false
  computerWinner.value = false
  computerLoser.value = false

  // 玩家操作
  const copyPlayerCardInfo = deepClone(cardInfo)
  playerCardInfo.value = copyPlayerCardInfo
  state.value.playerCardItems = state.value.playerCardItems.filter(card => card.sort !== copyPlayerCardInfo.sort);

  // 记录玩家出牌
  recordPlayerPlay(copyPlayerCardInfo, playerRole.value)

  // 电脑操作（AI根据难度分析出牌）
  const aiCards = state.value.computerCardItems
  const aiRole = playerRole.value === 'emperor' ? 'slave' : 'emperor'
  const aiThinkDelay = getAiThinkDelay(state.value.difficulty)

  setTimeout(() => {
    const sort = aiChooseCard(aiCards, aiRole)
    const copyComputerCardInfo = deepClone(aiCards[sort])
    computerCardInfo.value = copyComputerCardInfo;
    state.value.computerCardItems = state.value.computerCardItems.filter(card => card.sort !== copyComputerCardInfo.sort)

    // 记录电脑出牌
    recordComputerPlay(copyComputerCardInfo, aiRole)
    playSound('deal', 0.3)

    // 延时比对
    setTimeout(() => {
      checkedCard(copyPlayerCardInfo, copyComputerCardInfo)
    }, 800)
  }, aiThinkDelay)
}

/**
 * 判断游戏结果
 */
const judgeRoundWinner = (playerCard: CardItem, computerCard: CardItem): LogItem => {
  const results: Record<string, Record<string, 'win' | 'lose' | 'draw'>> = {
    emperor: { emperor: 'draw', citizen: 'win', slave: 'lose' },
    citizen: { emperor: 'lose', citizen: 'draw', slave: 'win' },
    slave: { emperor: 'win', citizen: 'lose', slave: 'draw' },
  };
  const result = results[playerCard.role][computerCard.role];

  // 结算豆子
  const beansChange = settleBeans(result)

  const logItem: LogItem = {
    round: state.value.rounds,
    role: playerRole.value,
    result: result,
    sort: playerCard.sort,
    playerScore: result === 'win' ? 1 : 0,
    computerScore: result === 'lose' ? 1 : 0,
    playerCardRole: playerCard.role,
    computerCardRole: computerCard.role,
    beansChange
  };

  // 统计胜负
  if (result === 'win') {
    state.value.totalWins++
  } else if (result === 'lose') {
    state.value.totalLosses++
  }

  return logItem;
}

/**
 * 检查卡牌
 */
const checkedCard = (playerCard: CardItem, computerCard: CardItem): void => {
  // 翻牌
  setTimeout(() => {
    isRevealed.value = true
    playSound('flip', 0.4)
  }, 300)

  // 对战冲击
  setTimeout(() => {
    isImpact.value = true
    playSound('impact', 0.6)
    screenShake.value = true
    setTimeout(() => { screenShake.value = false }, 500)
  }, 800)

  // 结算
  setTimeout(() => {
    const result = judgeRoundWinner(playerCard, computerCard)

    // 设置胜负动画
    if (result.result === 'win') {
      playerWinner.value = true
      computerLoser.value = true
      playSound('win', 0.5)
    } else if (result.result === 'lose') {
      playerLoser.value = true
      computerWinner.value = true
      playSound('lose', 0.5)
    }

    isImpact.value = false

    // 平局不进入下一局日志，直接弃牌继续
    if (playerCard.role === computerCard.role) {
      state.value.dropedCardItems.push(playerCard, computerCard);
      setTimeout(() => {
        computerCardInfo.value = null
        playerCardInfo.value = null
        busy.value = false
      }, 1000)
      return
    }

    // 记录本局日志（在破产检查之前，确保最后一局也有记录）
    state.value.gameLogItems.push(result)

    // 检查破产
    const bankruptcy = checkBankruptcy()
    if (bankruptcy) {
      setTimeout(() => {
        if (bankruptcy === 'player-bankrupt') {
          state.value.gameState = 'lose'
        } else {
          state.value.gameState = 'win'
        }
        showSettle.value = true
      }, 1500)
      return
    }

    // 检查比分
    const playerScore = state.value.gameLogItems.reduce((s, i) => s + (i.playerScore || 0), 0)
    const computerScore = state.value.gameLogItems.reduce((s, i) => s + (i.computerScore || 0), 0)

    setTimeout(() => {
      computerCardInfo.value = null
      playerCardInfo.value = null
      isRevealed.value = false
      playerWinner.value = false
      playerLoser.value = false
      computerWinner.value = false
      computerLoser.value = false

      // 检查游戏是否结束
      if (playerScore >= 11 || computerScore >= 11) {
        if (playerScore >= 11) {
          state.value.gameState = 'win'
        } else {
          state.value.gameState = 'lose'
        }
        showSettle.value = true
        return
      }

      // 对局结束，进行下一局
      busy.value = false
      nextRounds();
      showGameMenuRef.value?.reshow();
    }, 1500)
  }, 1500)
}

/**
 * 重新开始游戏
 */
const handleRestart = () => {
  busy.value = false
  playerCardInfo.value = null
  computerCardInfo.value = null
  showSettle.value = false
  state.value.gameState = 'init'
  state.value.rounds = 1
  state.value.dropedCardItems = []
  state.value.gameLogItems = []
  state.value.totalWins = 0
  state.value.totalLosses = 0
  // 重置豆子
  state.value.playerBeans = state.value.initialBeans
  state.value.computerBeans = state.value.initialBeans
  state.value.playerPlayHistory = []
  state.value.computerPlayHistory = []
  // 重新发牌
  const newRole = Math.random() > 0.5 ? 'emperor' : 'slave'
  state.value.playerRole = newRole
  state.value.playerCardItems = []
  state.value.computerCardItems = []
  // 使用initRounds重新初始化
  initRounds(newRole, 1, state.value.difficulty, state.value.betAmount, state.value.initialBeans)
}

/**
 * 返回主菜单
 */
const handleBack = () => {
  busy.value = false
  playerCardInfo.value = null
  computerCardInfo.value = null
  showSettle.value = false
  state.value.gameState = 'init'
  state.value.rounds = 1
  state.value.dropedCardItems = []
  state.value.gameLogItems = []
  // 重置豆子到初始值
  state.value.playerBeans = state.value.initialBeans
  state.value.computerBeans = state.value.initialBeans
  state.value.playerPlayHistory = []
  state.value.computerPlayHistory = []
}

</script>
<template>
  <div class="game-root">
    <GameMenu ref="showGameMenuRef" />
    <SettlePanel :visible="showSettle" @restart="handleRestart" @back="handleBack" />
    <div v-show="!menuVisible" class="match-layout" :inert="menuVisible || showSettle">
      <header class="match-topbar">
        <div class="match-round"><GameIcon name="cards" /><span>{{ $t('game.no') }} <strong>{{ state.rounds }}</strong> {{ $t('game.round') }}</span></div>
        <div class="match-score"><span>{{ $t('info.player') }}</span><strong>{{ playerScore }} : {{ computerScore }}</strong><span>{{ $t('info.computer') }}</span></div>
        <div class="match-wallet"><GameIcon name="coins" /><span>{{ $t('info.beans') }}</span><strong>{{ state.playerBeans }}</strong></div>
        <button v-if="compact" class="icon-button" :aria-label="$t('ui.details')" :title="$t('ui.details')" @click="mobileInfo = true"><GameIcon name="details" /></button>
      </header>
      <div class="match-body" :class="{ compact }">
        <div class="board engraved-frame" :class="{ 'screen-impact': screenShake }">
          <section class="hand-zone computer-hand" :aria-label="$t('info.computer')">
            <h2 class="zone-label"><GameIcon name="opponent" /><span>{{ $t('info.computer') }}</span><span class="label-divider" /><span>{{ state.computerCardItems.length }} / 5</span></h2>
            <ComputedCard />
          </section>
          <section class="battle-zone">
            <div class="battle-player"><span class="battle-label">{{ $t('info.computer') }}</span><CheckCard :card-info="[computerCardInfo]" :is-revealed="isRevealed" :is-impact="isImpact" :is-winner="computerWinner" :is-loser="computerLoser" /></div>
            <div class="battle-status" role="status" aria-live="polite"><GameIcon name="swords" /><span>{{ $t(busy ? 'ui.resolving' : 'ui.chooseCard') }}</span></div>
            <div class="battle-player"><span class="battle-label">{{ $t('info.player') }}</span><CheckCard :card-info="[playerCardInfo]" :is-revealed="isRevealed" :is-impact="isImpact" :is-winner="playerWinner" :is-loser="playerLoser" /></div>
          </section>
          <section class="hand-zone player-hand" :aria-label="$t('info.player')">
            <h2 class="zone-label"><GameIcon name="user" /><span>{{ $t('info.player') }}</span><span class="label-divider" /><span>{{ $t(`game.${state.playerRole}`) }}</span></h2>
            <PlayerCard :disabled="busy || state.gameState !== 'start'" @card-check="playerCardCheck" />
          </section>
        </div>
        <aside v-if="!compact" class="info-panel engraved-frame" :aria-label="$t('ui.details')"><GameInformation /><DropCard /></aside>
      </div>
    </div>
    <Teleport to="body"><dialog ref="infoDialog" class="record-dialog engraved-frame" :aria-label="$t('ui.details')" @close="mobileInfo = false">
      <button class="icon-button dialog-close" :aria-label="$t('ui.close')" @click="mobileInfo = false"><GameIcon name="close" /></button>
      <GameInformation /><DropCard />
    </dialog></Teleport>
  </div>
</template>
