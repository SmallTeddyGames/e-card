<script setup lang="ts">
import { getAssetsFile } from '@/utils'
import GameIcon from './GameIcon.vue'
const state = useGlobalState()
const recentCards = computed(() => state.value.dropedCardItems.slice(-6))
</script>
<template>
  <section class="discard-section">
    <h3 class="section-label"><GameIcon name="cards" /> {{ $t('game.dropArea') }} <span class="count-label">{{ state.dropedCardItems.length }}</span></h3>
    <div class="discard-cards">
      <img v-for="(card, index) in recentCards" :key="`${card.sort}-${index}`" :src="getAssetsFile(card.img)" :alt="$t(`game.${card.role}`)" width="375" height="513" />
      <span v-if="!recentCards.length" class="muted">{{ $t('ui.noDiscards') }}</span>
    </div>
  </section>
</template>
