<script lang="ts" setup>
import { getAssetsFile, getRandomNumber } from '@/utils'
import type { CardItem } from '../Type/cardType'

const props = withDefaults(
  defineProps<{
    cardItems?: CardItem[]
  }>(),
  {
    cardItems: () => []
  }
)

</script>

<template>
  <div v-if="cardItems.length > 0" flex-center relative card-size>
    <draggable :list="cardItems" :group="'drop'" item-key="sort">
      <template #item="{ element: cardInfo, index }">
        <img card-size cursor-pointer absolute left-0 top-0 class="rotate"
          :style="`--rotation-random: ${getRandomNumber(5 * index)}deg`" :alt="cardInfo.role"
          :src="getAssetsFile(cardInfo.img)" />
      </template>
    </draggable>

  </div>
  <div v-else card-size cursor-pointer border="1px #fff dashed" flex-center>
    弃<br />牌<br />区<br />域
  </div>
</template>

<style>
.rotate {
  --rotation-angle: 0;
  transform: rotate(var(--rotation-random));
  transition: transform 0.3s ease;
}
</style>
