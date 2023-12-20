<script lang="ts" setup>
import Card from './Card.vue'
import { getAssetsFile } from '@/utils'
import type { CardItem } from '../Type/cardType'
const props = withDefaults(
  defineProps<{
    role: String
    cardItems: CardItem[]
  }>(),
  {
    role: () => 'emperor',
    cardItems: () => []
  }
)

const emits = defineEmits({
  'card-check': (cardInfo: CardItem) => true
})

const playerCardItems = ref()

watch(
  () => props.cardItems,
  (val) => {
    playerCardItems.value = val
  },
  { immediate: true }
)

const handleCardClick = (cardInfo: CardItem) => {
  playerCardItems.value.map((v) => (v.isClick = false))
  cardInfo.isClick = true
}

const cardCheckClick = (cardInfo: CardItem) => {
  emits('card-check', cardInfo)
}

defineExpose({
  cardCheckClick
})
</script>

<template>
  <draggable :list="cardItems" tag="div" :group="{ name: role, pull: true, put: false, revertClone: true }"
    :component-data="{ grid: `~ cols-5 gap-5` }" item-key="sort" :sort="true">
    <template #item="{ element, index }">
      <div card-size relative cursor-pointer transition-all-500 :class="[
        element.isClick ? 'top--20px' : 'top-0',
        element.group,
        element.role + index
      ]">
        <Card :cardInfo="element" @card-click="handleCardClick" />
        <div v-if="element.isClick" text-center>
          <button @click="cardCheckClick(element)">check</button>
        </div>
      </div>
    </template>
  </draggable>
</template>
