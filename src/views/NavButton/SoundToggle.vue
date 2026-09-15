<script setup lang="ts">
import GameIcon from '../Component/GameIcon.vue'
import { toggleSound } from '@/utils'
const state = useGlobalState()
</script>
<template><button class="icon-button" :aria-pressed="state.soundEnabled" :aria-label="$t('ui.sound')" :title="$t('ui.sound')" @click="toggleSound"><GameIcon :name="state.soundEnabled ? 'sound' : 'mute'" /></button></template>
