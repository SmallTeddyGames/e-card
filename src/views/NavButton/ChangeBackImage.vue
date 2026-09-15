<script setup lang="ts">
import GameIcon from '../Component/GameIcon.vue'
const state = useGlobalState()
const toggle = () => { state.value.bgImage = state.value.bgImage >= 4 ? 1 : state.value.bgImage + 1 }
</script>
<template><button class="icon-button" :aria-label="$t('ui.background')" :title="$t('ui.background')" @click="toggle"><GameIcon name="background" /></button></template>
