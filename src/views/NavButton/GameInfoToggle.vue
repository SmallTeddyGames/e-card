<script setup lang="ts">
import GameIcon from '../Component/GameIcon.vue'
const state = useGlobalState()
</script>
<template><button class="icon-button" :aria-label="$t('ui.details')" :title="$t('ui.details')" :aria-pressed="state.isShowGameInfo" @click="state.isShowGameInfo = !state.isShowGameInfo"><GameIcon name="details" /></button></template>
