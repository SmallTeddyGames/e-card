<script lang="ts" setup>
import MessageInfo from './MessageInfo.vue';
const emits = defineEmits(["close"]);
const producerText = [
  "SmallTeddy"
];
</script>

<template>
  <MessageInfo title="制作人员" :info-list="producerText" @close="emits('close')" />
</template>

