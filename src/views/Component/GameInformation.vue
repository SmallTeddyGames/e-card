<script lang="ts" setup>
import GameIcon from './GameIcon.vue'
const { t } = useI18n()
const state = useGlobalState()

/**
 * 获取游戏总分
 * @key 'playerScore' | 'computerScore'
 */
const getScoreSum = (key: 'playerScore' | 'computerScore') => {
  return state.value.gameLogItems.reduce((totalScore, currentItem): number => {
    return totalScore + (currentItem[key] || 0);
  }, 0);
}

// 玩家总分
const playerFinalScore = computed(() => getScoreSum('playerScore'))
// 电脑总分
const computerFinalScore = computed(() => getScoreSum('computerScore'))

// 难度名称
const difficultyName = computed(() => {
  const map: Record<string, string> = {
    easy: t('difficulty.easy'),
    middle: t('difficulty.middle'),
    hard: t('difficulty.hard'),
    hell: t('difficulty.hell')
  }
  return map[state.value.difficulty] || state.value.difficulty
})

</script>
<template>
  <section class="game-information">
    <header class="panel-heading"><GameIcon name="details" /><h2>{{ t('ui.details') }}</h2><span class="difficulty-tag">{{ difficultyName }}</span></header>
    <div class="score-board">
      <div><span>{{ t('info.player') }}</span><strong>{{ playerFinalScore }}</strong></div><span class="versus">:</span><div><span>{{ t('info.computer') }}</span><strong>{{ computerFinalScore }}</strong></div>
    </div>
    <div class="log-scroll scroll-region" tabindex="0" :aria-label="t('ui.details')">
      <table>
        <thead><tr><th scope="col">{{ t('info.round') }}</th><th scope="col">{{ t('info.role') }}</th><th scope="col">{{ t('info.result') }}</th><th scope="col">{{ t('info.beans') }}</th></tr></thead>
        <tbody>
          <tr v-if="!state.gameLogItems.length"><td colspan="4" class="empty-log"><GameIcon name="book" /><p>{{ t('ui.emptyLog') }}</p></td></tr>
          <tr v-for="item in state.gameLogItems" :key="`${item.round}-${item.sort}`">
            <td>{{ item.round }}</td><td>{{ t(`game.${item.role}`) }}</td>
            <td :class="item.result === 'win' ? 'success' : 'danger'">{{ t(`info.${item.result}`) }}</td>
            <td :class="(item.beansChange || 0) >= 0 ? 'success' : 'danger'">{{ (item.beansChange || 0) > 0 ? '+' : '' }}{{ item.beansChange || 0 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
