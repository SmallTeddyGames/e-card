<script lang="ts" setup>
import { getAssetsFile, getRandomNumber } from '@/utils'

const { t } = useI18n()
const state = useGlobalState()
</script>

<template>
  <div v-if="state.dropedCardItems.length > 0" class="flex-center relative card-size">
    <div
      v-for="(cardInfo, index) in state.dropedCardItems"
      :key="`${cardInfo.sort}-${index}`"
      class="card-size cursor-pointer absolute left-0 top-0 rounded-lg shadow-lg animate-card-deal"
      :style="{
        transform: `rotate(${(index % 2 === 0 ? 1 : -1) * getRandomNumber(30)}deg)`,
        zIndex: index,
        animationDelay: `${index * 0.05}s`
      }"
    >
      <img
        card-size
        class="rounded-lg"
        :alt="cardInfo.role"
        :src="getAssetsFile(cardInfo.img)"
      />
    </div>
    <!-- 牌堆数量提示 -->
    <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-gray-600 text-xs font-bold bg-white px-2 py-1 rounded-full shadow-sm">
      {{ state.dropedCardItems.length }}
    </div>
  </div>
  <div v-else card-size cursor-pointer border="2px #c7c7cc dashed" flex-center rounded-xl
    class="text-gray-400 text-sm opacity-60 transition-all duration-300 hover:opacity-100 hover:border-blue-400">
    {{ t('game.dropArea') }}
  </div>
</template>

<style>
.rotate {
  --rotation-angle: 0;
  transform: rotate(var(--rotation-random));
  transition: transform 0.3s ease;
}
</style>
