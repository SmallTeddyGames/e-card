<script lang="ts" setup>
import Card from './Card.vue'
import type { CardItem } from '@/views/Type'

const { t } = useI18n()

const props = withDefaults(
  defineProps<{
    cardInfo?: CardItem[] | null
    isRevealed?: boolean
    isImpact?: boolean
    isWinner?: boolean
    isLoser?: boolean
  }>(),
  {
    cardInfo: () => null,
    isRevealed: () => false,
    isImpact: () => false,
    isWinner: () => false,
    isLoser: () => false
  }
)
</script>

<template>
  <div v-if="cardInfo && cardInfo[0]" class="relative">
    <!-- 对战光效 -->
    <div v-if="isImpact" class="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      <div class="w-200px h-200px rounded-full animate-battle-impact"
        style="background: radial-gradient(circle, rgba(255,215,0,0.6) 0%, rgba(255,215,0,0) 70%);"></div>
    </div>
    <!-- 胜利光效 -->
    <div v-if="isWinner" class="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      <div class="w-160px h-220px rounded-xl animate-win-glow"></div>
    </div>
    <!-- 失败抖动 -->
    <div v-if="isLoser" class="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      <div class="w-160px h-220px rounded-xl animate-lose-shake"
        style="background: radial-gradient(circle, rgba(255,0,0,0.3) 0%, rgba(255,0,0,0) 70%);"></div>
    </div>
    <Card
      :card-info="cardInfo[0]"
      :is-back="!isRevealed"
      :is-impact="isImpact"
      :is-winner="isWinner"
      :is-loser="isLoser"
    />
  </div>
  <div v-else card-size cursor-pointer border="2px #fff dashed" flex-center rounded-xl
    class="text-white-60 text-sm opacity-60 transition-all duration-300 hover:opacity-100 hover:border-gold">
    {{ t('game.checkArea') }}
  </div>
</template>
