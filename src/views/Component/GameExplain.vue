<script lang="ts" setup>
import MessageInfo from './MessageInfo.vue';

const { t } = useI18n()
const emits = defineEmits(["close"]);

const explainText = [
  t('explain.explain1'),
  t('explain.explain2'),
  t('explain.explain3'),
  t('explain.explain4'),
  t('explain.explain5'),
  t('explain.explain6'),
  t('explain.explain7'),
  t('explain.explain8'),
  t('explain.explain9')
];
</script>

<template>
  <MessageInfo :title="t('explain.explain')" :info-list="explainText" @close="emits('close')" />
</template>

