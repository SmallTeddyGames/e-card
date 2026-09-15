<script lang="ts" setup>
const isDark = useDark({
  initialValue: 'dark',
  storageKey: 'e-card-color-mode'
})

/**
 * 切换模式
 */
const toggleMode = (): void => {
  isDark.value = !isDark.value
}
</script>

<template>
  <button rounded p-1 sm:p-2 hover="bg-active" @click="toggleMode">
    <div i-ph-sun-dim-duotone dark:i-ph-moon-stars-duotone text-xl sm:text-2xl />
  </button>
</template>
