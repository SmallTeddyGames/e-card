<script lang="ts" setup>
import MessageInfo from './MessageInfo.vue';

const { t } = useI18n()
const emits = defineEmits(["close"]);

const producerText = [
  "SmallTeddy",
  "wh131462",
  "remember-study",
  "cangbaoderen",
  "Yang-mingLei",
  "Medalc",
  "qingjiuge"
];
</script>

<template>
  <MessageInfo :title="t('menu.producer')" :info-list="producerText" @close="emits('close')" />
</template>

