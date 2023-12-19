<script setup>
import GameInfoToggle from '../NavButton/GameInfoToggle.vue'
import ChangeBackImage from '../NavButton/ChangeBackImage.vue'
import FullScreenToggle from '../NavButton/FullScreenToggle.vue'
import ColorSchemeToggle from '../NavButton/ColorSchemeToggle.vue'
import GitHubButton from '../NavButton/GitHubButton.vue'
</script>

<template>
  <nav  w-screen px4 py3 text-lg border="b base" flex="~ gap-1 items-center">
    <div title="Game">E-Card</div>
    <div flex-auto />
    <GitHubButton />
    <GameInfoToggle />
    <ColorSchemeToggle />
    <ChangeBackImage />
    <FullScreenToggle />
  </nav>
</template>
