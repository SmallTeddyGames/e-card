<script setup lang="ts">
import GameIcon from '../Component/GameIcon.vue'
const { locale } = useI18n()
const state = useGlobalState()
const toggle = () => {
  const languages = ['cn', 'en', 'jp', 'kr'] as const
  state.value.language = languages[(languages.indexOf(state.value.language) + 1) % languages.length]
  locale.value = state.value.language
}
</script>
<template><button class="icon-button" :aria-label="$t('ui.language')" :title="$t('ui.language')" @click="toggle"><GameIcon name="language" /></button></template>
