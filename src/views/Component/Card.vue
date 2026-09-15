<script setup lang="ts">
import type { CardItem } from '@/views/Type'
import { getAssetsFile } from '@/utils'
withDefaults(defineProps<{
  cardInfo: CardItem
  isBack?: boolean
  isImpact?: boolean
  isWinner?: boolean
  isLoser?: boolean
  interactive?: boolean
  disabled?: boolean
}>(), { isBack: false, interactive: false, disabled: false })
const emits = defineEmits<{ (event: 'card-click', card: CardItem): void }>()
</script>
<template>
  <component :is="interactive ? 'button' : 'div'" class="playing-card"
    :class="{ 'can-play': interactive && !disabled, 'card-winner': isWinner, 'card-loser': isLoser, 'card-impact': isImpact }"
    :type="interactive ? 'button' : undefined" :role="interactive ? undefined : 'img'"
    :disabled="interactive ? disabled : undefined"
    :aria-label="isBack ? $t('ui.cardBack') : $t(`game.${cardInfo.role}`)"
    @click="interactive && !disabled && emits('card-click', cardInfo)">
    <span class="card-inner" :class="{ flipped: isBack }" aria-hidden="true">
      <span class="card-face"><img :src="getAssetsFile(cardInfo.img)" alt="" width="375" height="513" draggable="false" /></span>
      <span class="card-face card-back"><img :src="getAssetsFile('card-bg.jpg')" alt="" width="375" height="513" draggable="false" /></span>
    </span>
  </component>
</template>
