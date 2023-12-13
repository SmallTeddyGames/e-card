<script lang='ts' setup>
import { getAssetsFile } from '../../utils/index'

const props = defineProps({
  role: {
    type: String,
    default: 'emperor',
  }
})

type CardItem = {
  role: string
  img: string
  isClick: boolean
}

const emperorCardItems = ref([
  { role: 'emperor', img: 'emperor.jpg', isClick: false, sort: 1 },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 2 },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 3 },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 4 },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 5 }
])
const slaveCardItems = ref([
  { role: 'slave',   img: 'slave.jpg',   isClick: false, sort: 1 },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 2 },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 3 },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 4 },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 5 }
])

const cardItems = computed(() => {
  return props.role === 'emperor' ? emperorCardItems.value : slaveCardItems.value
})

const handleCardClick = (cardInfo: CardItem) => {
  cardItems.value.map(v => v.isClick = false)
  cardInfo.isClick = true
}
</script>

<template>
  <div grid="~ cols-5 gap-5">
    <img
      w-120px
      cursor-pointer
      v-for="cardItem in cardItems"
      :class="cardItem.isClick ? 'clicked' : ''"
      :alt="cardItem.role"
      :src="getAssetsFile(cardItem.img)"
      @click="handleCardClick(cardItem)"
    />
  </div>
</template>

<style>
img {
  position: relative;
  transition: top 0.3s ease;
}

.clicked {
  top: -20px;
}
</style>
