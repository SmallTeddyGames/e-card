<script setup lang="ts">
const { locale } = useI18n()
watchEffect(() => { document.documentElement.lang = ({ cn: 'zh-CN', en: 'en', jp: 'ja', kr: 'ko' } as Record<string, string>)[locale.value] || 'zh-CN' })
</script>
<template><router-view /></template>
