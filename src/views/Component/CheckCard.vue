<script setup lang="ts">
import Card from './Card.vue'
import GameIcon from './GameIcon.vue'
import type { CardItem } from '@/views/Type'
defineProps<{ cardInfo?: CardItem[]; isRevealed?: boolean; isImpact?: boolean; isWinner?: boolean; isLoser?: boolean }>()
</script>
<template>
  <div class="check-slot">
    <Card v-if="cardInfo?.[0]" :card-info="cardInfo[0]" :is-back="!isRevealed" :is-impact="isImpact" :is-winner="isWinner" :is-loser="isLoser" />
    <div v-else class="card-placeholder" :aria-label="$t('game.checkArea')"><GameIcon name="cards" /></div>
  </div>
</template>
