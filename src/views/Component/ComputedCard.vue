<script setup lang="ts">
import Card from './Card.vue'
const state = useGlobalState()
const slots = computed(() => Array.from({ length: 5 }, (_, index) => state.value.computerCardItems.find(card => card.sort === index + 1)))
</script>
<template><div class="hand"><div v-for="(card, index) in slots" :key="index" class="hand-slot"><Card v-if="card" :card-info="card" is-back /><span v-else class="used-slot" aria-hidden="true" /></div></div></template>
