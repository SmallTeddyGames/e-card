<script setup>
import ChangeGameStatus from '@/views/NavButton/ChangeGameStatus.vue'
import ChangeLanguage from '../NavButton/ChangeLanguage.vue'
import GameIcon from '../Component/GameIcon.vue'
import ChangeBackImage from '@/views/NavButton/ChangeBackImage.vue'
import FullScreenToggle from '@/views/NavButton/FullScreenToggle.vue'
import ColorSchemeToggle from '@/views/NavButton/ColorSchemeToggle.vue'
import GitHubButton from '@/views/NavButton/GitHubButton.vue'
import SoundToggle from '@/views/NavButton/SoundToggle.vue'
const settings = ref<HTMLDetailsElement | null>(null)
</script>

<template>
  <nav class="game-nav" :aria-label="$t('ui.navigation')">
    <span class="nav-brand"><GameIcon name="crown" />E-Card</span>
    <div class="nav-controls"><ChangeGameStatus /><SoundToggle />
      <details ref="settings" class="nav-settings" @keydown.esc="settings.open = false">
        <summary class="icon-button" :aria-label="$t('ui.settings')" :title="$t('ui.settings')"><GameIcon name="settings" /></summary>
        <div class="settings-panel"><ChangeLanguage /><ColorSchemeToggle /><ChangeBackImage /><FullScreenToggle /><GitHubButton /></div>
      </details>
    </div>
  </nav>
</template>
