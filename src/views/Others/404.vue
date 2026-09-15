<script setup lang="ts">
import GameIcon from '../Component/GameIcon.vue'
</script>
<template><main class="not-found"><section class="engraved-frame"><GameIcon name="cards" /><p class="error-code">404</p><h1>{{ $t('ui.notFound') }}</h1><RouterLink class="primary-button" to="/">{{ $t('ui.home') }}<GameIcon name="arrow" /></RouterLink></section></main></template>
