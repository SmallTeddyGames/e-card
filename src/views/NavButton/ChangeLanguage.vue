<script lang='ts' setup>
const { locale } = useI18n();
const state = useGlobalState()

const toggleLanguage = () => {
  const language = state.value.language
  switch (language) {
    case 'cn':
      state.value.language = 'en'
      locale.value = 'en'
      break
    case 'en':
      state.value.language = 'jp'
      locale.value = 'jp'
      break
    case 'jp':
      state.value.language = 'kr'
      locale.value = 'kr'
      break
    case 'kr':
      state.value.language = 'cn'
      locale.value = 'cn'
      break
  }
}

</script>

<template>
  <button rounded p1 sm:p2 title="GitHub" hover="bg-active" @click="toggleLanguage">
    <div i-carbon-translate text-xl sm:text-2xl />
  </button>
</template>

<style scoped>
</style>
