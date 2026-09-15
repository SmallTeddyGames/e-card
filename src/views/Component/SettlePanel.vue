<script lang="ts" setup>
import { getAssetsFile } from '@/utils'

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
</script>

<template>
  <transition name="settle">
    <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center"
      style="background: radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%); backdrop-filter: blur(8px);">
      <!-- 背景粒子效果 -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div v-for="i in 20" :key="i" class="absolute rounded-full animate-float"
          :style="{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: gameResult === 'win' ? 'rgba(0,113,227,0.5)' : 'rgba(255,100,100,0.5)',
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }"
        ></div>
      </div>

      <!-- 主结算面板 -->
      <div class="relative w-600px max-w-90vw max-h-[90vh] overflow-y-auto rounded-lg overflow-hidden animate-bounce-in"
        style="background: linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(245,245,247,0.98) 100%); border: 1px solid rgba(0,0,0,0.08); box-shadow: 0 20px 60px rgba(0,0,0,0.15);">
        <!-- 顶部装饰条 -->
        <div class="h-2" style="background: linear-gradient(90deg, #0071e3, #2997ff, #0071e3);"></div>

        <div class="p-3 sm:p-6">
          <!-- 结果标题 -->
          <div class="text-center mb-3 sm:mb-5">
            <div
              class="text-3xl sm:text-5xl font-black mb-2 sm:mb-3 animate-pulse-gold inline-block px-3 sm:px-6 py-1.5 rounded-md"
              :class="gameResult === 'win' ? 'gold-text' : 'text-red-500'"
              :style="gameResult === 'lose' ? { textShadow: '0 2px 20px rgba(255,100,100,0.3)' } : {}"
            >
              {{ gameResult === 'win' ? t('settle.victory') : gameResult === 'lose' ? t('settle.defeat') : t('settle.draw') }}
            </div>
            <div class="text-gray-500 text-sm sm:text-base">
              <span v-if="bankruptReason === 'player-bankrupt'">{{ t('settle.bankruptPlayer') }}</span>
              <span v-else-if="bankruptReason === 'computer-bankrupt'">{{ t('settle.bankruptComputer') }}</span>
              <span v-else>{{ t('settle.gameOver') }}</span>
            </div>
          </div>

          <!-- 比分展示 -->
          <div class="flex items-center justify-center gap-3 sm:gap-6 mb-3 sm:mb-5">
            <!-- 玩家 -->
            <div class="text-center">
              <div class="w-12 h-12 sm:w-20 sm:h-20 mx-auto rounded-full flex items-center justify-center mb-1 sm:mb-2"
                style="background: linear-gradient(135deg, #0071e3, #0051a8); border: 3px solid rgba(0,113,227,0.3); box-shadow: 0 4px 12px rgba(0,113,227,0.3);">
                <span class="text-lg sm:text-3xl">👑</span>
              </div>
              <div class="text-gray-800 font-bold text-xs sm:text-base">{{ t('info.player') }}</div>
              <div class="gold-text text-xl sm:text-3xl font-black mt-0.5">{{ playerFinalScore }}</div>
            </div>

            <!-- VS -->
            <div class="text-blue-500 text-lg sm:text-2xl font-black animate-pulse">VS</div>

            <!-- 电脑 -->
            <div class="text-center">
              <div class="w-12 h-12 sm:w-20 sm:h-20 mx-auto rounded-full flex items-center justify-center mb-1 sm:mb-2"
                style="background: linear-gradient(135deg, #ff3b30, #c73228); border: 3px solid rgba(255,59,48,0.3); box-shadow: 0 4px 12px rgba(255,59,48,0.2);">
                <span class="text-lg sm:text-3xl">🤖</span>
              </div>
              <div class="text-gray-800 font-bold text-xs sm:text-base">{{ t('info.computer') }}</div>
              <div class="text-red-500 text-xl sm:text-3xl font-black mt-0.5">{{ computerFinalScore }}</div>
            </div>
          </div>

          <!-- 游戏豆结算 -->
          <div class="rounded-md p-3 sm:p-5 mb-3 sm:mb-5"
            style="background: rgba(0,113,227,0.06); border: 1px solid rgba(0,113,227,0.15);">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1.5 sm:gap-2">
                <span class="text-lg sm:text-2xl">🫘</span>
                <span class="text-gray-700 font-bold text-xs sm:text-base">{{ t('settle.beans') }}</span>
              </div>
              <div class="text-right">
                <div class="text-gray-500 text-xs">{{ t('settle.remaining') }}</div>
                <div class="gold-text text-lg sm:text-2xl font-black">{{ state.playerBeans }}</div>
              </div>
            </div>
            <div class="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-200 flex items-center justify-between">
              <span class="text-gray-600 text-xs sm:text-sm">{{ t('settle.beansChange') }}</span>
              <span class="text-base sm:text-xl font-bold" :class="beansChange >= 0 ? 'text-green-500' : 'text-red-500'">
                {{ beansChange >= 0 ? '+' : '' }}{{ beansChange }}
              </span>
            </div>
          </div>

          <!-- 对局统计 -->
          <div class="grid grid-cols-3 gap-1.5 sm:gap-3 mb-3 sm:mb-5">
            <div class="text-center p-2 sm:p-3 rounded-md" style="background: rgba(52,199,89,0.08); border: 1px solid rgba(52,199,89,0.15);">
              <div class="text-green-500 text-lg sm:text-2xl font-black">{{ state.totalWins }}</div>
              <div class="text-gray-500 text-xs mt-0.5">{{ t('settle.totalWins') }}</div>
            </div>
            <div class="text-center p-2 sm:p-3 rounded-md" style="background: rgba(255,59,48,0.08); border: 1px solid rgba(255,59,48,0.15);">
              <div class="text-red-500 text-lg sm:text-2xl font-black">{{ state.totalLosses }}</div>
              <div class="text-gray-500 text-xs mt-0.5">{{ t('settle.totalLosses') }}</div>
            </div>
            <div class="text-center p-2 sm:p-3 rounded-md" style="background: rgba(0,113,227,0.08); border: 1px solid rgba(0,113,227,0.15);">
              <div class="gold-text text-lg sm:text-2xl font-black">{{ state.rounds - 1 }}</div>
              <div class="text-gray-500 text-xs mt-0.5">{{ t('settle.roundsPlayed') }}</div>
            </div>
          </div>

          <!-- 操作按钮 -->
          <div class="flex gap-2 sm:gap-3">
            <button
              class="flex-1 py-2 sm:py-3 rounded-md font-bold text-sm sm:text-base text-gray-700 transition-all duration-300 hover:scale-105 active:scale-95"
              style="background: rgba(255,255,255,0.9); border: 1px solid rgba(0,0,0,0.1); box-shadow: 0 2px 8px rgba(0,0,0,0.06);"
              @click="emits('back')"
            >
              {{ t('settle.backToMenu') }}
            </button>
            <button
              class="flex-1 py-2 sm:py-3 rounded-md font-bold text-sm sm:text-base text-white transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse-gold"
              style="background: linear-gradient(135deg, #0071e3, #0051a8);"
              @click="emits('restart')"
            >
              {{ t('settle.playAgain') }}
            </button>
          </div>
        </div>

        <!-- 底部装饰条 -->
        <div class="h-2" style="background: linear-gradient(90deg, #0071e3, #2997ff, #0071e3);"></div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.settle-enter-active,
.settle-leave-active {
  transition: opacity 0.5s ease;
}
.settle-enter-from,
.settle-leave-to {
  opacity: 0;
}
</style>
