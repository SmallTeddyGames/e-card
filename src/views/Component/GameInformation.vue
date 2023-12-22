<script lang="ts" setup>
import type { LogItem } from '@/views/Type'
import { useGlobalState } from '@/store';

// 全局信息变量
const state = useGlobalState()

/**
 * 玩家总分
 */
const playerFinalScore = computed(() => {
  return state.value.gameInfoItems.reduce((totalScore, currentItem): number => {
    return totalScore + currentItem.playerScore;
  }, 0);
})

/**
 * 电脑总分
 */
const computerFinalScore = computed(() => {
  return state.value.gameInfoItems.reduce((totalScore, currentItem): number => {
    return totalScore + currentItem.computerScore;
  }, 0);
})

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
    <tr v-for="item in state.gameInfoItems" :class="item.playerScore ? 'bg-green' : 'bg-red'">
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
