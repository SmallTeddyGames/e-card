<script lang="ts" setup>
import Card from './Card.vue'
import { throttle, playSound } from '@/utils';
import type { CardItem } from '@/views/Type'

const state = useGlobalState()
const emits = defineEmits(['card-check'])

// 选中的卡牌索引
const selectedIndex = ref<number | null>(null)

/**
 * 检查卡牌点击
 * @param cardInfo 卡牌信息
 */
const cardCheckClick = (cardInfo: CardItem): void => {
  // 三秒的节流 防止多次点击
  throttle(() => {
    playSound('flip', 0.4)
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
  <div class="grid grid-cols-5 gap-3">
    <div
      v-for="(cardItem, index) in state.playerCardItems"
      :key="cardItem.sort"
      class="card-size relative cursor-pointer transition-all duration-300 hover:-translate-y-5 animate-card-deal"
      :style="{ animationDelay: `${index * 0.1}s` }"
      :class="[selectedIndex === index ? '-translate-y-5 scale-110' : '']"
    >
      <Card
        :card-info="cardItem"
        :is-back="cardItem.isBack"
        @card-click="(card) => { selectedIndex = index; cardCheckClick(card) }"
      />
    </div>
  </div>
</template>
