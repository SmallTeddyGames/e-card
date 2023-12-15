<script lang='ts' setup>
import { getAssetsFile } from '../../utils/index'
import type { CardItem } from '../Type/cardType'

const props = withDefaults(defineProps<{
  role: String
  cardItems: CardItem[]
}>(), {
  role: () => 'emperor',
  cardItems: () => []
})

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
  playerCardItems.value.map(v => v.isClick = false)
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
  <div grid="~ cols-5 gap-5">
    <div card-size relative cursor-pointer transition-all-500 v-for="(cardItem, index) in cardItems"
      :class="[cardItem.isClick ? 'top--20px' : 'top-0', cardItem.group, cardItem.role + index]">
      <img :alt="cardItem.role" :src="getAssetsFile(cardItem.img)" @click="handleCardClick(cardItem)" />
      <div v-if="cardItem.isClick" text-center>
        <button @click="cardCheckClick(cardItem)">check</button>
      </div>
    </div>
  </div>
</template>
