<script lang='ts' setup>
import { getAssetsFile } from '../../utils/index'
import type { CardItem } from '../Type/cardType'

const props = withDefaults(defineProps<{
  cardInfo?: CardItem
}>(), {
  cardInfo: () => ({ role: 'citizen', img: 'citizen.jpg' })
})
</script>

<template>
  <div>
    <img w-120px cursor-pointer :alt="cardInfo.role" :src="getAssetsFile(cardInfo.img)" />
  </div>
</template>

