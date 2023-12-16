<script lang="ts" setup>
import { getAssetsFile } from '@/utils'
import type { CardItem } from '../Type/cardType'

const props = withDefaults(
  defineProps<{
    cardInfo?: CardItem[] | null
  }>(),
  {
    cardInfo: () => null
  }
)
</script>

<template>
  <div v-if="cardInfo[0]">
    <img card-size cursor-pointer :alt="cardInfo[0].role" :src="getAssetsFile(cardInfo[0].img)" />
  </div>
  <div v-else card-size cursor-pointer border="1px #fff dashed" flex-center>
    检<br />查<br />区<br />域
  </div>
</template>
