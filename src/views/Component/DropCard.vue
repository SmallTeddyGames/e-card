<script lang='ts' setup>
import { getAssetsFile } from '../../utils/index'
import type { CardItem } from '../Type/cardType'

const props = withDefaults(defineProps<{
  cardItems?: CardItem[]
}>(), {
  cardItems: () => []
})

const rot = 10
</script>

<template>
  <div v-if="cardItems.length > 0" flex-center relative card-size>
    <img v-for="(cardInfo, index) in cardItems" card-size cursor-pointer absolute left-0 top-0
      :class="`rotate-${rot + 10 * index}`" :alt="cardInfo.role" :src="getAssetsFile(cardInfo.img)" />
  </div>
  <div v-else card-size cursor-pointer border="1px #fff dashed" flex-center>
    弃<br />牌<br />区<br />域
  </div>
</template>

