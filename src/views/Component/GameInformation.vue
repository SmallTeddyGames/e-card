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

/**
 * 使用reduce函数计算score的总和
 */
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
