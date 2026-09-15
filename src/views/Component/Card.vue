<script lang='ts' setup>
import type { CardItem } from '@/views/Type'
import { getAssetsFile } from '@/utils';

const props = withDefaults(
  defineProps<{
    cardInfo: CardItem
    isAnimation?: boolean
    isBack?: boolean
    isImpact?: boolean
    isWinner?: boolean
    isLoser?: boolean
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    cardInfo: () => null,
    isAnimation: () => false,
    isBack: () => false,
    isImpact: () => false,
    isWinner: () => false,
    isLoser: () => false,
    size: () => 'md'
  }
)

const emits = defineEmits(['card-click'])

const sizeStyle = computed(() => {
  switch (props.size) {
    case 'sm':
      return { width: 'clamp(42px, 6.2vh, 60px)', height: 'clamp(58px, 8.6vh, 84px)' }
    case 'lg':
      return { width: 'clamp(70px, 10.5vh, 100px)', height: 'clamp(98px, 14.7vh, 140px)' }
    default:
      return { width: 'clamp(52px, 7.8vh, 80px)', height: 'clamp(72px, 10.8vh, 112px)' }
  }
})
</script>

<template>
  <div
    :class="[
      'card-3d relative cursor-pointer transition-all duration-300',
      isAnimation && 'card-animation',
      isImpact && 'animate-battle-impact',
      isWinner && 'animate-win-glow rounded-sm',
      isLoser && 'animate-lose-shake'
    ]"
    :style="sizeStyle"
    @click="emits('card-click', cardInfo)"
  >
    <div :class="['card-3d-inner', isBack && 'flipped']">
      <!-- 正面 -->
      <div
        class="card-face"
        :style="{ backgroundImage: `url(${getAssetsFile(cardInfo.img)})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
      >
        <div v-if="isWinner" class="absolute inset-0 bg-green-500-30 rounded-sm"></div>
        <div v-if="isLoser" class="absolute inset-0 bg-red-500-30 rounded-sm"></div>
      </div>
      <!-- 背面 -->
      <div
        class="card-face card-face-back"
        :style="{ backgroundImage: `url(${getAssetsFile('card-bg.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
      >
        <div class="w-full h-full flex items-center justify-center">
          <div class="text-gold text-2xl font-bold opacity-60">E</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-animation {
  animation: card-rotate 3s infinite;
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
