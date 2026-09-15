<script setup lang="ts">
import GameIcon from '../Component/GameIcon.vue'
const isDark = useDark({ initialValue: 'dark', storageKey: 'e-card-color-mode' })
</script>
<template><button class="icon-button" :aria-pressed="isDark" :aria-label="$t('ui.theme')" :title="$t('ui.theme')" @click="isDark = !isDark"><GameIcon :name="isDark ? 'sun' : 'moon'" /></button></template>
