<script setup>
import GameInfoToggle from '../NavButton/GameInfoToggle.vue'
import ChangeBackImage from '../NavButton/ChangeBackImage.vue'
import FullScreenToggle from '../NavButton/FullScreenToggle.vue'
import ColorSchemeToggle from '../NavButton/ColorSchemeToggle.vue'
import GitHubButton from '../NavButton/GitHubButton.vue'
</script>

<template>
  <nav w-screen px4 py3 text-lg border="b base" flex="~ gap-1 items-center">
    <div title="Game">E-Card</div>
    <div flex-auto />
    <!-- git按钮 -->
    <GitHubButton />
    <!-- todo: 游戏开始之前隐藏 -->
    <!-- 游戏信息控制按钮 -->
    <GameInfoToggle />
    <!-- 颜色切换按钮 -->
    <ColorSchemeToggle />
    <!-- 背景切换按钮 -->
    <ChangeBackImage />
    <!-- 全屏按钮 -->
    <FullScreenToggle />
  </nav>
</template>
