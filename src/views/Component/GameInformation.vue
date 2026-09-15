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
    <div class="flex items-center justify-between px-3 py-2 rounded-xl"
      style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,215,0,0.2);">
      <div class="flex items-center gap-2">
        <span class="text-gold text-sm font-bold">⚔️ {{ difficultyName }}</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-white-80 text-sm">🫘</span>
        <span class="gold-text font-bold text-lg">{{ state.playerBeans }}</span>
      </div>
    </div>

    <!-- 比分面板 -->
    <div class="flex items-center justify-between px-4 py-3 rounded-xl"
      style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1);">
      <div class="text-center">
        <div class="text-blue-400 text-xs">{{ t('info.player') }}</div>
        <div class="text-white text-2xl font-black">{{ playerFinalScore }}</div>
      </div>
      <div class="text-gold text-xs font-bold">VS</div>
      <div class="text-center">
        <div class="text-red-400 text-xs">{{ t('info.computer') }}</div>
        <div class="text-white text-2xl font-black">{{ computerFinalScore }}</div>
      </div>
    </div>

    <!-- 对局日志 -->
    <div class="flex-1 overflow-y-auto rounded-xl"
      style="background: rgba(0,0,0,0.2);">
      <table class="w-full text-sm">
        <thead>
          <tr class="text-white-70 text-xs sticky top-0" style="background: rgba(0,0,0,0.6);">
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
            class="border-t border-white-5 transition-all duration-300"
            :class="item.result === 'win' ? 'bg-green-500-10' : item.result === 'lose' ? 'bg-red-500-10' : 'bg-white-5'"
          >
            <td class="py-2 px-1 text-center text-white-80">{{ item.round }}</td>
            <td class="py-2 px-1 text-center">
              <span :class="item.role === 'emperor' ? 'text-yellow-400' : 'text-purple-400'">
                {{ t(`game.${item.role}`) }}
              </span>
            </td>
            <td class="py-2 px-1 text-center">
              <span :class="item.result === 'win' ? 'text-green-400' : item.result === 'lose' ? 'text-red-400' : 'text-white-60'">
                {{ t(`info.${item.result}`) }}
              </span>
            </td>
            <td class="py-2 px-1 text-center">
              <span :class="(item.beansChange || 0) > 0 ? 'text-green-400' : (item.beansChange || 0) < 0 ? 'text-red-400' : 'text-white-60'">
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
