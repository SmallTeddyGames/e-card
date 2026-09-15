<script lang="ts" setup>
import GameIcon from './GameIcon.vue'

const { t } = useI18n()
const state = useGlobalState()

const props = defineProps<{
  visible: boolean
}>()

const emits = defineEmits(['restart', 'back'])

// 玩家总分
const playerFinalScore = computed(() =>
  state.value.gameLogItems.reduce((total, item) => total + (item.playerScore || 0), 0)
)
// 电脑总分
const computerFinalScore = computed(() =>
  state.value.gameLogItems.reduce((total, item) => total + (item.computerScore || 0), 0)
)

// 游戏结果
const gameResult = computed(() => {
  if (state.value.gameState === 'win') return 'win'
  if (state.value.gameState === 'lose') return 'lose'
  if (playerFinalScore.value > computerFinalScore.value) return 'win'
  if (playerFinalScore.value < computerFinalScore.value) return 'lose'
  return 'draw'
})

// 豆子变化
const beansChange = computed(() => state.value.playerBeans - state.value.initialBeans)

// 破产原因
const bankruptReason = computed(() => {
  if (state.value.playerBeans <= 0) return 'player-bankrupt'
  if (state.value.computerBeans <= 0) return 'computer-bankrupt'
  return null
})
const dialog = ref<HTMLDialogElement | null>(null)
watch(() => props.visible, async visible => {
  await nextTick()
  if (visible && !dialog.value?.open) dialog.value?.showModal()
  else if (!visible && dialog.value?.open) dialog.value.close()
}, { immediate: true })
</script>
<template>
  <Teleport to="body">
    <dialog ref="dialog" class="settle-dialog engraved-frame" :aria-label="t('settle.gameOver')" @cancel.prevent>
      <header class="settle-heading"><GameIcon :name="gameResult === 'win' ? 'crown' : 'cards'" /><h1 :class="gameResult === 'lose' ? 'danger' : ''">{{ t(`settle.${gameResult === 'win' ? 'victory' : gameResult === 'lose' ? 'defeat' : 'draw'}`) }}</h1><p>{{ t(bankruptReason === 'player-bankrupt' ? 'settle.bankruptPlayer' : bankruptReason === 'computer-bankrupt' ? 'settle.bankruptComputer' : 'settle.gameOver') }}</p></header>
      <div class="settle-body scroll-region">
        <div class="score-board"><div><span>{{ t('info.player') }}</span><strong>{{ playerFinalScore }}</strong></div><span class="versus">:</span><div><span>{{ t('info.computer') }}</span><strong>{{ computerFinalScore }}</strong></div></div>
        <div class="settle-balance"><span><GameIcon name="coins" /> {{ t('settle.remaining') }}</span><strong>{{ state.playerBeans }}</strong><span>{{ t('settle.beansChange') }}</span><strong :class="beansChange >= 0 ? 'success' : 'danger'">{{ beansChange > 0 ? '+' : '' }}{{ beansChange }}</strong></div>
        <dl class="settle-stats"><div><dt>{{ t('settle.totalWins') }}</dt><dd>{{ state.totalWins }}</dd></div><div><dt>{{ t('settle.totalLosses') }}</dt><dd>{{ state.totalLosses }}</dd></div><div><dt>{{ t('settle.roundsPlayed') }}</dt><dd>{{ state.gameLogItems.length }}</dd></div></dl>
      </div>
      <footer class="settle-actions"><button class="secondary-button" @click="emits('back')">{{ t('settle.backToMenu') }}</button><button class="primary-button" autofocus @click="emits('restart')">{{ t('settle.playAgain') }}<GameIcon name="arrow" /></button></footer>
    </dialog>
  </Teleport>
</template>
