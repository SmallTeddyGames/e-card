<script lang="ts" setup>
import Card from './Card.vue'
import { useGlobalState } from '@/store';
import { debounce, throttle } from '@/utils';
import type { CardItem } from '@/views/Type'

const state = useGlobalState()
const emits = defineEmits(['card-check'])

/**
 * 检查卡牌点击
 * @param cardInfo 卡牌信息
 */
const cardCheckClick = (cardInfo: CardItem): void => {
  // 三秒的节流 防止多次点击
  throttle(() => {
    cardInfo.isBack = true
    setTimeout(() => {
      emits('card-check', cardInfo)
    }, 1000)
  }, 4500)
}

defineExpose({
  cardCheckClick
})
</script>

<template>
  <div grid="~ cols-5 gap-5">
    <div card-size relative cursor-pointer transition-all-500 hover:top--20px v-for="cardItem in state.playerCardItems"
      :key="cardItem.sort" :class="[cardItem.isClick ? 'top--20px' : 'top-0']">
      <Card :card-info="cardItem" :is-back="cardItem.isBack" @card-click="cardCheckClick" />
    </div>
  </div>
</template>
