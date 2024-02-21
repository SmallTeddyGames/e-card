<script lang="ts" setup>
const { t } = useI18n()
const state = useGlobalState()

/**
 * 获取游戏总分
 * @key 'playerScore' | 'computerScore' 
 */
const getScoreSum = (key: 'playerScore' | 'computerScore') => {
  return state.value.gameLogItems.reduce((totalScore, currentItem): number => {
    return totalScore + currentItem[key];
  }, 0);
}

// 玩家总分
const playerFinalScore = computed(() => getScoreSum('playerScore'))
// 电脑总分
const computerFinalScore = computed(() => getScoreSum('computerScore'))

watch(
  () => playerFinalScore.value,
  (score: number) => {
    if (score === 11) {
      state.value.gameState = 'win'
    }
  },
  {
    immediate: true
  }
)

watch(
  () => computerFinalScore.value,
  (score: number) => {
    if (score === 11) {
      state.value.gameState = 'lose'
    }
  },
  {
    immediate: true
  }
)
</script>

<template>
  <table>
    <tr>
      <td>{{ t('info.round') }}</td>
      <td>{{ t('info.role') }}</td>
      <td>{{ t('info.result') }}</td>
      <td>{{ t('info.player') }}</td>
      <td>{{ t('info.computer') }}</td>
    </tr>
    <tr v-for="item in state.gameLogItems" :key="`${item.role}-${item.sort}`"
      :class="item.playerScore ? 'bg-green:50' : 'bg-red:50'">
      <td>{{ item.round }}</td>
      <td>{{ item.role }}</td>
      <td>{{ item.result }}</td>
      <td>{{ item.playerScore }}</td>
      <td>{{ item.computerScore }}</td>
    </tr>
    <tr>
      <td>{{ t('info.score') }}</td>
      <td></td>
      <td></td>
      <td>{{ playerFinalScore }}</td>
      <td>{{ computerFinalScore }}</td>
    </tr>
  </table>
</template>

<style scoped>
table,
tr,
td {
  --uno: border-base border-1;
}

table tr td {
  --uno: w-80px h-28px text-center;
}
</style>
