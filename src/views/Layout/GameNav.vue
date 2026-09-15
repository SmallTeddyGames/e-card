<script setup>
import ChangeGameStatus from '@/views/NavButton/ChangeGameStatus.vue'
import ChangeLanguage from '../NavButton/ChangeLanguage.vue'
import GameInfoToggle from '@/views/NavButton/GameInfoToggle.vue'
import ChangeBackImage from '@/views/NavButton/ChangeBackImage.vue'
import FullScreenToggle from '@/views/NavButton/FullScreenToggle.vue'
import ColorSchemeToggle from '@/views/NavButton/ColorSchemeToggle.vue'
import GitHubButton from '@/views/NavButton/GitHubButton.vue'
import SoundToggle from '@/views/NavButton/SoundToggle.vue'
</script>

<template>
  <nav w-full px2 sm:px4 py2 sm:py3 text-base sm:text-lg border="b" border-color="gray-200" flex="~ gap-0.5 sm:gap-1 items-center"
    style="background: rgba(255,255,255,0.72); backdrop-filter: saturate(180%) blur(20px); -webkit-backdrop-filter: saturate(180%) blur(20px);">
    <div title="Game" class="gold-text font-black text-base sm:text-xl">E-Card</div>
    <div flex-auto />
    <!-- 游戏控制按钮 -->
    <ChangeGameStatus />
    <!-- 语言切换按钮 -->
    <ChangeLanguage />
    <!-- 音效开关 -->
    <SoundToggle />
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
