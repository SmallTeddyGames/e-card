<script setup>
import ChangeGameStatus from '@/views/NavButton/ChangeGameStatus.vue'
import ChangeLanguage from '../NavButton/ChangeLanguage.vue'
import GameInfoToggle from '@/views/NavButton/GameInfoToggle.vue'
import ChangeBackImage from '@/views/NavButton/ChangeBackImage.vue'
import FullScreenToggle from '@/views/NavButton/FullScreenToggle.vue'
import ColorSchemeToggle from '@/views/NavButton/ColorSchemeToggle.vue'
import GitHubButton from '@/views/NavButton/GitHubButton.vue'
</script>

<template>
  <nav w-screen px4 py3 text-lg border="b base" flex="~ gap-1 items-center">
    <div title="Game">E-Card</div>
    <div flex-auto />
    <!-- 游戏控制按钮 -->
    <ChangeGameStatus />
    <!-- 语言切换按钮 -->
    <ChangeLanguage />
    <!-- git按钮 -->
    <GitHubButton />
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
