<script lang="ts" setup>
import Card from './Card.vue'

const state = useGlobalState()
</script>

<template>
  <div grid="~ cols-5 gap-5">
    <div card-size relative cursor-pointer transition-all-500 v-for="cardItem in state.computerCardItems" :key="cardItem.sort">
      <Card :card-info="cardItem" is-back />
    </div>
  </div>
</template>
