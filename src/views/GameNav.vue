<script setup>
import ColorSchemeToggle from './ColorSchemeToggle.vue'
</script>

<template>
  <nav px4 py3 text-lg border="b base" flex="~ gap-1 items-center">
    <div title="Game">
      E-Card
    </div>
    <div flex-auto />
    <ColorSchemeToggle />
    <a rounded p2 title="GitHub" hover="bg-active" href="https://github.com/SmallTeddy/e-card" target="_blank">
      <div i-carbon-logo-github text-2xl />
    </a>
  </nav>
</template>
