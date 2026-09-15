<script lang='ts' setup>
import GameIcon from './GameIcon.vue'
import GameExplain from '@/views/Component/GameExplain.vue'
import ProducerList from '@/views/Component/ProducerList.vue'
import { playSound, getAssetsFile } from '@/utils'
import { initRounds } from '@/utils/game.util'
import { GameStatus, Difficulty } from '@/views/Type'

const { t } = useI18n()
const state = useGlobalState()
const showGameInfo = ref(false);
const show = ref(true);
const maxRounds = 21

// 难度选项
const difficulties: Array<{ key: Difficulty; label: string; icon: string }> = [
  { key: 'easy', label: 'easy', icon: 'leaf' },
  { key: 'middle', label: 'middle', icon: 'swords' },
  { key: 'hard', label: 'hard', icon: 'flame' },
  { key: 'hell', label: 'hell', icon: 'skull' },
]

// 押注选项
const betOptions = [50, 100, 200, 500]
const selectedDifficulty = ref<Difficulty>('middle')
const selectedBet = ref(100)

const info = computed(() => state.value)
// 角色名称
const name = computed(() => state.value.playerRole)
const showcase = ['citizen', 'emperor', 'slave'] as const

// 随机抽取角色 并初始化轮次
initRounds(
  Math.floor((Math.random() * 10 * 20) % 2) == 0 ? 'emperor' : 'slave',
  1,
  selectedDifficulty.value,
  selectedBet.value,
  state.value.initialBeans || 1000
)


/**
 * 暴露出去重现方法
 */
const reshow = (): void => {
  show.value = true;
  if (info.value.rounds <= maxRounds && info.value.rounds > 1) {
    setTimeout(() => {
      if (['win', 'lose'].includes(state.value.gameState)) {
        return show.value = true;
      }
      show.value = false;
    }, 2000);
  }
}

/**
 * 游戏开始
 */
const startGame = (): void => {
  if (['win', 'lose'].includes(state.value.gameState)) {
    return;
  }
  playSound('deal', 0.3)
  if (state.value.gameState !== 'start') {
    state.value.gameState = 'start'
    return
  }
  showGameInfo.value = true
  state.value.difficulty = selectedDifficulty.value
  state.value.betAmount = selectedBet.value
  setTimeout(() => {
    show.value = false;
    if (info.value.rounds > maxRounds) {
      showGameInfo.value = false;
    }
  }, 2000);
}

/**
 * 重新开始
 */
const restartGame = () => {
  showGameInfo.value = false;
  show.value = true;
  state.value.rounds = 1;
  state.value.gameState = 'init';
  state.value.totalWins = 0;
  state.value.totalLosses = 0;
  initRounds(
    info.value.playerRole,
    info.value.rounds,
    selectedDifficulty.value,
    selectedBet.value,
    state.value.initialBeans || 1000
  );

}

/**
 * 开始按钮文字
 */
const startLabel = computed(() => {
  let label;
  switch (state.value.gameState) {
    case 'pause': label = t('menu.continue'); break
    case 'win': label = t('menu.win'); break
    case 'lose': label = t('menu.lose'); break
    default: label = t('menu.start');
  }
  return label;
})

// 游戏说明
const showGameExplain = ref(false)
// 游戏制作人名单
const showGameProducer = ref(false)

const openGameExplain = () => {
  show.value = false
  showGameExplain.value = true
}

const closeGameExplain = () => {
  show.value = true
  showGameExplain.value = false
}

const openGameProducer = () => {
  show.value = false
  showGameProducer.value = true
}

const closeProducerList = () => {
  show.value = true
  showGameProducer.value = false
}

// 选择难度
const selectDifficulty = (diff: Difficulty) => {
  selectedDifficulty.value = diff
  playSound('click', 0.2)
}

// 选择押注
const selectBet = (bet: number) => {
  selectedBet.value = bet
  playSound('click', 0.2)
}

watch(
  () => state.value.gameState,
  (gameState: GameStatus) => {
    if (gameState === 'start') {
      startGame()
    }
    if (['init', 'pause', 'win', 'lose'].includes(gameState)) {
      show.value = true;
      showGameInfo.value = false
    }
  },
  { immediate: true }
)

defineExpose({
  reshow,
  show: computed(() => show.value || showGameExplain.value || showGameProducer.value)
});
</script>

<template>
  <section v-if="show" class="menu-screen">
    <div v-if="showGameInfo" class="round-intro engraved-frame" role="status">
      <GameIcon name="swords" />
      <p class="section-label">{{ t('game.prepare') }}</p>
      <h1>{{ t('game.no') }} {{ state.rounds }} {{ t('game.round') }}</h1>
      <p>{{ t('game.role') }}<span class="label-divider" />{{ t(`game.${name}`) }}</p>
    </div>
    <div v-else class="menu-stage">
      <section class="lobby-art">
        <header class="lobby-heading">
          <h1>E-CARD</h1>
          <p>{{ t('menu.subtitle') }}</p>
        </header>
        <div class="menu-deck">
          <figure v-for="role in showcase" :key="role" :class="{ 'emperor-showcase': role === 'emperor' }">
            <img :src="getAssetsFile(`${role}.jpg`)" :alt="t(`game.${role}`)" width="375" height="513" draggable="false" />
            <figcaption>{{ t(`game.${role}`) }}</figcaption>
          </figure>
        </div>
        <p class="card-rule">{{ t('ui.ruleSummary') }}</p>
      </section>
      <section class="match-setup engraved-frame" :aria-label="t('ui.matchSetup')">
        <header class="setup-heading"><GameIcon name="swords" /><h2>{{ t('ui.matchSetup') }}</h2></header>
        <fieldset class="setup-field">
          <legend>{{ t('menu.difficulty') }}</legend>
          <div class="difficulty-options">
            <button v-for="diff in difficulties" :key="diff.key" class="option-button" :aria-pressed="selectedDifficulty === diff.key" @click="selectDifficulty(diff.key)">
              <GameIcon :name="diff.icon" /><span>{{ t(`difficulty.${diff.label}`) }}</span>
              <GameIcon v-if="selectedDifficulty === diff.key" name="check" class="option-check" />
            </button>
          </div>
        </fieldset>
        <fieldset class="setup-field">
          <legend><GameIcon name="coins" /> {{ t('menu.betAmount') }}</legend>
          <div class="bet-options"><button v-for="bet in betOptions" :key="bet" class="option-button" :aria-pressed="selectedBet === bet" @click="selectBet(bet)">{{ bet }}</button></div>
        </fieldset>
        <div class="setup-actions" :class="{ 'has-restart': state.gameState !== 'init' }">
          <button class="primary-button" @click="startGame"><span>{{ startLabel }}</span><GameIcon name="arrow" /></button>
          <button v-if="state.gameState !== 'init'" class="secondary-button" @click="restartGame">{{ t('menu.reStart') }}</button>
          <div class="menu-links"><button class="text-button" @click="openGameExplain"><GameIcon name="book" />{{ t('menu.explain') }}</button><button class="text-button" @click="openGameProducer"><GameIcon name="users" />{{ t('menu.producer') }}</button></div>
        </div>
      </section>
    </div>
  </section>
  <section v-if="showGameExplain" class="menu-screen reading-screen"><GameExplain @close="closeGameExplain" /></section>
  <section v-if="showGameProducer" class="menu-screen reading-screen"><ProducerList @close="closeProducerList" /></section>
</template>
