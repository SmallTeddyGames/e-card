<script setup>
import ChangeBackImage from '../NavButton/ChangeBackImage.vue';
import FullScreenToggle from '../NavButton/FullScreenToggle.vue';
import ColorSchemeToggle from '../NavButton/ColorSchemeToggle.vue'
import GitHubButton from '../NavButton/GitHubButton.vue'
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
