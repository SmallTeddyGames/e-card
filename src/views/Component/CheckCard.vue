<script lang="ts" setup>
import Card from './Card.vue'
import type { CardItem } from '../Type/cardType'

withDefaults(
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
    <Card :card-info="cardInfo[0]" />
  </div>
  <div v-else card-size cursor-pointer border="1px #fff dashed" flex-center>
    检<br />查<br />区<br />域
  </div>
</template>
