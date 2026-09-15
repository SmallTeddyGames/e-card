<script setup lang="ts">
import GameIcon from '../Component/GameIcon.vue'
const state = useGlobalState()
const toggle = () => { state.value.gameState = state.value.gameState === 'pause' ? 'start' : 'pause' }
</script>
<template><button v-if="['start', 'pause'].includes(state.gameState)" class="icon-button" :aria-label="$t(state.gameState === 'pause' ? 'menu.continue' : 'ui.pause')" :title="$t(state.gameState === 'pause' ? 'menu.continue' : 'ui.pause')" @click="toggle"><GameIcon :name="state.gameState === 'pause' ? 'play' : 'pause'" /></button></template>
