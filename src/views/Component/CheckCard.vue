<script lang="ts" setup>
import Card from './Card.vue'
import type { CardItem } from '@/views/Type'

const { t } = useI18n()

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
    <Card :card-info="cardInfo[0]" :is-back="cardInfo[0].isBack" />
  </div>
  <div v-else card-size cursor-pointer border="1px #fff dashed" flex-center>
    {{ t('game.checkArea') }}
  </div>
</template>
