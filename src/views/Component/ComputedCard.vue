<script lang="ts" setup>
import Card from './Card.vue'

const state = useGlobalState()
</script>

<template>
  <div class="grid grid-cols-5 gap-3">
    <div
      v-for="(cardItem, index) in state.computerCardItems"
      :key="cardItem.sort"
      class="card-size relative cursor-pointer transition-all duration-300 hover:translate-y-3 animate-card-deal"
      :style="{ animationDelay: `${index * 0.1}s` }"
    >
      <Card :card-info="cardItem" is-back />
    </div>
  </div>
</template>
