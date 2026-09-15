<script lang="ts" setup>
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

watch(
  () => playerFinalScore.value,
  (score: number) => {
    if (score >= 11) {
      state.value.gameState = 'win'
    }
  },
  { immediate: true }
)

watch(
  () => computerFinalScore.value,
  (score: number) => {
    if (score >= 11) {
      state.value.gameState = 'lose'
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="w-full h-full p-4 overflow-hidden flex flex-col gap-3">
    <!-- 顶部信息栏 -->
    <div class="flex items-center justify-between px-3 py-2 rounded-md"
      style="background: rgba(255,255,255,0.9); border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
      <div class="flex items-center gap-2">
        <span class="text-blue-500 text-sm font-bold">⚔️ {{ difficultyName }}</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-gray-500 text-sm">🫘</span>
        <span class="gold-text font-bold text-lg">{{ state.playerBeans }}</span>
      </div>
    </div>

    <!-- 比分面板 -->
    <div class="flex items-center justify-between px-4 py-3 rounded-md"
      style="background: rgba(255,255,255,0.9); border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
      <div class="text-center">
        <div class="text-blue-500 text-xs">{{ t('info.player') }}</div>
        <div class="text-gray-900 text-2xl font-black">{{ playerFinalScore }}</div>
      </div>
      <div class="text-blue-500 text-xs font-bold">VS</div>
      <div class="text-center">
        <div class="text-red-500 text-xs">{{ t('info.computer') }}</div>
        <div class="text-gray-900 text-2xl font-black">{{ computerFinalScore }}</div>
      </div>
    </div>

    <!-- 对局日志 -->
    <div class="flex-1 overflow-y-auto rounded-md"
      style="background: rgba(255,255,255,0.8); border: 1px solid rgba(0,0,0,0.06);">
      <table class="w-full text-sm">
        <thead>
          <tr class="text-gray-500 text-xs sticky top-0" style="background: rgba(245,245,247,0.95);">
            <th class="py-2 px-1 text-center">{{ t('info.round') }}</th>
            <th class="py-2 px-1 text-center">{{ t('info.role') }}</th>
            <th class="py-2 px-1 text-center">{{ t('info.result') }}</th>
            <th class="py-2 px-1 text-center">{{ t('info.beans') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in state.gameLogItems"
            :key="`${item.round}-${item.sort}`"
            class="border-t border-gray-100 transition-all duration-300"
            :class="item.result === 'win' ? 'bg-green-50' : item.result === 'lose' ? 'bg-red-50' : 'bg-gray-50'"
          >
            <td class="py-2 px-1 text-center text-gray-700">{{ item.round }}</td>
            <td class="py-2 px-1 text-center">
              <span :class="item.role === 'emperor' ? 'text-yellow-600' : 'text-purple-600'">
                {{ t(`game.${item.role}`) }}
              </span>
            </td>
            <td class="py-2 px-1 text-center">
              <span :class="item.result === 'win' ? 'text-green-600' : item.result === 'lose' ? 'text-red-600' : 'text-gray-500'">
                {{ t(`info.${item.result}`) }}
              </span>
            </td>
            <td class="py-2 px-1 text-center">
              <span :class="(item.beansChange || 0) > 0 ? 'text-green-600' : (item.beansChange || 0) < 0 ? 'text-red-600' : 'text-gray-500'">
                {{ (item.beansChange || 0) > 0 ? '+' : '' }}{{ item.beansChange || 0 }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
table {
  border-collapse: collapse;
}
</style>
