<script setup lang="ts">
import GameIcon from './GameIcon.vue'
withDefaults(defineProps<{ title: string; infoList: string[]; credits?: boolean }>(), { credits: false })
const emits = defineEmits<{ (event: 'close'): void }>()
</script>
<template>
  <article class="message-panel engraved-frame" :class="{ 'credits-panel': credits }">
    <header class="panel-heading"><GameIcon :name="credits ? 'users' : 'book'" /><h1>{{ title }}</h1></header>
    <div class="message-body scroll-region" tabindex="0" :aria-label="title">
      <ul v-if="credits" class="credits-list">
        <li v-for="name in infoList" :key="name">
          <a :href="`https://github.com/${encodeURIComponent(name)}`" target="_blank" rel="noopener noreferrer">{{ name }}</a>
        </li>
      </ul>
      <ol v-else class="rules-list"><li v-for="(text, index) in infoList" :key="index">{{ text }}</li></ol>
    </div>
    <footer class="panel-footer"><button class="secondary-button" @click="emits('close')"><GameIcon name="back" />{{ $t('common.back') }}</button></footer>
  </article>
</template>
