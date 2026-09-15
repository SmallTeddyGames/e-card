<script setup lang="ts">
import Card from './Card.vue'
import type { CardItem } from '@/views/Type'
import { playSound } from '@/utils'
const state = useGlobalState()
const props = defineProps<{ disabled: boolean }>()
const pending = ref(false)
watch(() => props.disabled, value => { if (!value) pending.value = false })
const slots = computed(() => Array.from({ length: 5 }, (_, index) => state.value.playerCardItems.find(card => card.sort === index + 1)))
const emits = defineEmits<{ (event: 'card-check', card: CardItem): void }>()
const cardCheckClick = (card: CardItem) => {
  if (props.disabled || pending.value) return
  pending.value = true
  playSound('flip', 0.4)
  emits('card-check', card)
}
</script>
<template>
  <div class="hand">
    <div v-for="(card, index) in slots" :key="index" class="hand-slot">
      <Card v-if="card" :card-info="card" interactive :disabled="disabled || pending" :is-back="card.isBack" @card-click="cardCheckClick" />
      <span v-else class="used-slot" aria-hidden="true" />
    </div>
  </div>
</template>
