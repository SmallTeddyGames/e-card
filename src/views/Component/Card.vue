<script lang='ts' setup>
import type { CardItem } from '@/views/Type'
import { getAssetsFile } from '@/utils';

withDefaults(
  defineProps<{
    cardInfo: CardItem
    isAnimation?: boolean
    isBack?: boolean
  }>(),
  {
    cardInfo: () => null,
    isAnimation: () => false,
    isBack: () => false
  }
)

const emits = defineEmits(['card-click'])
</script>

<template>
  <div :class="{ 'card-animation': isAnimation, 'card-back': isBack }" card-size relative preserve-3d cursor-pointer
    transition-transform-1 @click="emits('card-click', cardInfo)">
    <div w-full h-full absolute bg-cover backface-hidden
      :style="{ backgroundImage: `url(${getAssetsFile(cardInfo.img)})` }"></div>
    <div w-full h-full absolute bg-cover backface-hidden transform-rotate-y-180
      :style="{ backgroundImage: `url(${getAssetsFile('card-bg.jpg')})` }"></div>
  </div>
</template>

<style>
.card-animation {
  animation: card-rotate 3s infinite;
}

.card-back {
  transform: rotateY(180deg);
}

@keyframes card-rotate {
  0% {
    transform: rotateY(0);
  }

  50% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(0);
  }
}
</style>
