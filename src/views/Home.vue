<script lang='ts' setup>
import GameNav from './GameNav.vue'
import GameContent from './GameContent.vue'
</script>

<template>
  <main h-100dvh h-screen w-screen of-hidden grid="~ rows-[max-content_1fr]">
    <GameNav />

    <GameContent />
  </main>
</template>
