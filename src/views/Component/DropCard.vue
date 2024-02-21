<script lang="ts" setup>
import { getAssetsFile, getRandomNumber } from '@/utils'

const { t } = useI18n()
const state = useGlobalState()
</script>

<template>
  <div v-if="state.dropedCardItems.length > 0" flex-center relative card-size>
    <div v-for="(cardInfo, index) in state.dropedCardItems" :key="cardInfo.sort">
      <img card-size cursor-pointer absolute left-0 top-0 class="rotate"
        :style="`--rotation-random: ${getRandomNumber(5 * index)}deg`" :alt="cardInfo.role"
        :src="getAssetsFile(cardInfo.img)" />
    </div>
  </div>
  <div v-else card-size cursor-pointer border="1px #fff dashed" flex-center>
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
