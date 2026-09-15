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
      style="background: radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.95) 100%);">
      <!-- 背景粒子效果 -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div v-for="i in 20" :key="i" class="absolute rounded-full animate-float"
          :style="{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: gameResult === 'win' ? 'rgba(255,215,0,0.6)' : 'rgba(255,100,100,0.6)',
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }"
        ></div>
      </div>

      <!-- 主结算面板 -->
      <div class="relative w-600px max-w-90vw rounded-3xl overflow-hidden animate-bounce-in"
        style="background: linear-gradient(135deg, rgba(26,26,62,0.95) 0%, rgba(15,15,40,0.98) 100%); border: 2px solid rgba(255,215,0,0.3); box-shadow: 0 0 60px rgba(255,215,0,0.2);">
        <!-- 顶部装饰条 -->
        <div class="h-2" style="background: linear-gradient(90deg, #FFD700, #FFA500, #FFD700);"></div>

        <div class="p-8">
          <!-- 结果标题 -->
          <div class="text-center mb-8">
            <div
              class="text-6xl font-black mb-4 animate-pulse-gold inline-block px-8 py-2 rounded-2xl"
              :class="gameResult === 'win' ? 'gold-text' : 'text-red-400'"
              :style="gameResult === 'lose' ? { textShadow: '0 0 20px rgba(255,100,100,0.8)' } : {}"
            >
              {{ gameResult === 'win' ? t('settle.victory') : gameResult === 'lose' ? t('settle.defeat') : t('settle.draw') }}
            </div>
            <div class="text-white-70 text-lg">
              <span v-if="bankruptReason === 'player-bankrupt'">{{ t('settle.bankruptPlayer') }}</span>
              <span v-else-if="bankruptReason === 'computer-bankrupt'">{{ t('settle.bankruptComputer') }}</span>
              <span v-else>{{ t('settle.gameOver') }}</span>
            </div>
          </div>

          <!-- 比分展示 -->
          <div class="flex items-center justify-center gap-8 mb-8">
            <!-- 玩家 -->
            <div class="text-center">
              <div class="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-3"
                style="background: linear-gradient(135deg, #4169E1, #1a1a3e); border: 3px solid rgba(255,215,0,0.5);">
                <span class="text-4xl">👑</span>
              </div>
              <div class="text-white font-bold text-lg">{{ t('info.player') }}</div>
              <div class="gold-text text-4xl font-black mt-1">{{ playerFinalScore }}</div>
            </div>

            <!-- VS -->
            <div class="text-gold text-3xl font-black animate-pulse">VS</div>

            <!-- 电脑 -->
            <div class="text-center">
              <div class="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-3"
                style="background: linear-gradient(135deg, #8B0000, #2d0a0a); border: 3px solid rgba(255,100,100,0.5);">
                <span class="text-4xl">🤖</span>
              </div>
              <div class="text-white font-bold text-lg">{{ t('info.computer') }}</div>
              <div class="text-red-400 text-4xl font-black mt-1">{{ computerFinalScore }}</div>
            </div>
          </div>

          <!-- 游戏豆结算 -->
          <div class="rounded-2xl p-6 mb-6"
            style="background: rgba(255,215,0,0.08); border: 1px solid rgba(255,215,0,0.2);">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="text-3xl">🫘</span>
                <span class="text-white-80 font-bold text-lg">{{ t('settle.beans') }}</span>
              </div>
              <div class="text-right">
                <div class="text-white-60 text-sm">{{ t('settle.remaining') }}</div>
                <div class="gold-text text-3xl font-black">{{ state.playerBeans }}</div>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-white-10 flex items-center justify-between">
              <span class="text-white-70">{{ t('settle.beansChange') }}</span>
              <span class="text-2xl font-bold" :class="beansChange >= 0 ? 'text-green-400' : 'text-red-400'">
                {{ beansChange >= 0 ? '+' : '' }}{{ beansChange }}
              </span>
            </div>
          </div>

          <!-- 对局统计 -->
          <div class="grid grid-cols-3 gap-4 mb-8">
            <div class="text-center p-4 rounded-xl" style="background: rgba(0,255,136,0.1); border: 1px solid rgba(0,255,136,0.2);">
              <div class="text-green-400 text-3xl font-black">{{ state.totalWins }}</div>
              <div class="text-white-60 text-sm mt-1">{{ t('settle.totalWins') }}</div>
            </div>
            <div class="text-center p-4 rounded-xl" style="background: rgba(255,100,100,0.1); border: 1px solid rgba(255,100,100,0.2);">
              <div class="text-red-400 text-3xl font-black">{{ state.totalLosses }}</div>
              <div class="text-white-60 text-sm mt-1">{{ t('settle.totalLosses') }}</div>
            </div>
            <div class="text-center p-4 rounded-xl" style="background: rgba(255,215,0,0.1); border: 1px solid rgba(255,215,0,0.2);">
              <div class="gold-text text-3xl font-black">{{ state.rounds - 1 }}</div>
              <div class="text-white-60 text-sm mt-1">{{ t('settle.roundsPlayed') }}</div>
            </div>
          </div>

          <!-- 操作按钮 -->
          <div class="flex gap-4">
            <button
              class="flex-1 py-4 rounded-xl font-bold text-lg text-white transition-all duration-300 hover:scale-105 active:scale-95"
              style="background: linear-gradient(135deg, #4169E1, #1a1a3e); border: 1px solid rgba(255,215,0,0.3);"
              @click="emits('back')"
            >
              {{ t('settle.backToMenu') }}
            </button>
            <button
              class="flex-1 py-4 rounded-xl font-bold text-lg text-white transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse-gold"
              style="background: linear-gradient(135deg, #FFD700, #B8860B);"
              @click="emits('restart')"
            >
              {{ t('settle.playAgain') }}
            </button>
          </div>
        </div>

        <!-- 底部装饰条 -->
        <div class="h-2" style="background: linear-gradient(90deg, #FFD700, #FFA500, #FFD700);"></div>
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
