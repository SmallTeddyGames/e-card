<script lang="ts" setup>
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

const computedCardItems = ref()

watch(
  () => props.cardItems,
  (val) => {
    computedCardItems.value = val
  },
  { immediate: true }
)

const cardCheckClick = (cardInfo: CardItem) => {
  computedCardItems.value = computedCardItems.value.filter(
    (card) => card.sort !== cardInfo.sort
  )
  emits('card-check', cardInfo)
}

defineExpose({
  cardCheckClick
})
</script>

<template>
  <div grid="~ cols-5 gap-5">
    <div
      card-size
      relative
      cursor-pointer
      transition-all-500
      v-for="(cardItem, index) in cardItems"
      :class="[
        cardItem.isClick ? 'top--20px' : 'top-0',
        cardItem.group,
        cardItem.role + index
      ]"
    >
      <img :alt="cardItem.role" :src="getAssetsFile(cardItem.img)" />
    </div>
  </div>
</template>
