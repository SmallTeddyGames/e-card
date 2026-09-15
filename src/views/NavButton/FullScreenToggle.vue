<script setup lang="ts">
import GameIcon from '../Component/GameIcon.vue'
const { isFullscreen, toggle } = useFullscreen()
</script>
<template><button class="icon-button" :aria-pressed="isFullscreen" :aria-label="$t('ui.fullscreen')" :title="$t('ui.fullscreen')" @click="toggle"><GameIcon :name="isFullscreen ? 'exitFullscreen' : 'fullscreen'" /></button></template>
