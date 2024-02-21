<script lang="ts" setup>
// 全局信息变量
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
      <td>局数</td>
      <td>角色</td>
      <td>结果</td>
      <td>玩家</td>
      <td>电脑</td>
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
      <td>总比分</td>
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
