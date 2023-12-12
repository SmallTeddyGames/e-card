<script setup>
import ChangeBackImage from './ChangeBackImage.vue';
import FullScreenToggle from './FullScreenToggle.vue';
import ColorSchemeToggle from './ColorSchemeToggle.vue'
import GitHubButton from './GitHubButton.vue'
</script>

<template>
  <nav px4 py3 text-lg border="b base" flex="~ gap-1 items-center">
    <div title="Game">
      E-Card
    </div>
    <div flex-auto />
    <GitHubButton />
    <ChangeBackImage />
    <ColorSchemeToggle />
    <FullScreenToggle />
  </nav>
</template>
