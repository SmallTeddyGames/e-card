<script lang="ts" setup>
import type { LogItem } from '../Type/logType'

const props = withDefaults(
  defineProps<{
    gameInfoItems: LogItem[]
  }>(),
  {
    gameInfoItems: () => []
  }
)

const gameInfomationItems: LogItem[] = props.gameInfoItems
// [
//   { round: 1, role: 'emperor', result: 'win', score: 1 },
//   { round: 2, role: 'slave', result: 'win', score: 1 },
//   { round: 3, role: 'emperor', result: 'lose', score: 0 },
//   { round: 4, role: 'slave', result: 'lose', score: 0 },
//   { round: 5, role: 'emperor', result: 'win', score: 1 },
//   { round: 6, role: 'slave', result: 'lose', score: 0 },
//   { round: 7, role: 'emperor', result: 'lose', score: 0 },
//   { round: 8, role: 'slave', result: 'win', score: 1 },
//   { round: 9, role: 'emperor', result: 'lose', score: 0 },
//   { round: 10, role: 'slave', result: 'lose', score: 0 },
//   { round: 11, role: 'emperor', result: 'lose', score: 0 },
//   { round: 12, role: 'slave', result: 'win', score: 1 },
//   { round: 13, role: 'emperor', result: 'win', score: 1 },
//   { round: 14, role: 'slave', result: 'win', score: 1 },
//   { round: 15, role: 'emperor', result: 'lose', score: 0 },
//   { round: 16, role: 'slave', result: 'lose', score: 0 },
//   { round: 17, role: 'emperor', result: 'win', score: 1 },
//   { round: 18, role: 'slave', result: 'lose', score: 0 },
//   { round: 19, role: 'emperor', result: 'lose', score: 0 },
//   { round: 20, role: 'slave', result: 'win', score: 1 },
//   { round: 21, role: 'emperor', result: 'lose', score: 0 }
// ]

// 使用reduce函数计算score的总和
const gameFinalScore = gameInfomationItems.reduce((totalScore, currentItem) => {
  return totalScore + currentItem.score;
}, 0);
</script>

<template>
  <table>
    <tr>
      <td>局数</td>
      <td>角色</td>
      <td>结果</td>
      <td>记分</td>
    </tr>
    <tr v-for="item in gameInfomationItems" :class="item.score ? 'bg-green' : 'bg-red'">
      <td>{{ item.round }}</td>
      <td>{{ item.role }}</td>
      <td>{{ item.result }}</td>
      <td>{{ item.score }}</td>
    </tr>
    <tr>
      <td>总比分</td>
      <td></td>
      <td></td>
      <td>{{ gameFinalScore }}</td>
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
