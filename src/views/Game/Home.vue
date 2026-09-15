<script lang="ts" setup>
import GameNav from '@/views/Layout/GameNav.vue'
import GameContent from '@/views/Layout/GameContent.vue'
</script>

<template>
  <main h-100dvh w-full of-hidden grid="~ rows-[max-content_minmax(0,1fr)]">
    <GameNav />
    <GameContent />
  </main>
</template>
