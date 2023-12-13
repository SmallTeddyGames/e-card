<script lang='ts' setup>
const props = defineProps({
  role: {
    type: String,
    default: 'emperor',
  }
})
</script>

<template>
  <div grid="~ cols-5 gap-5">
    <img w-120px v-show="props.role === 'emperor'" src="../../assets/emperor.jpg" alt="emperor">
    <img w-120px v-show="props.role === 'slave'" src="../../assets/slave.jpg" alt="slave">
    <img w-120px src="../../assets/citizen.jpg" alt="">
    <img w-120px src="../../assets/citizen.jpg" alt="">
    <img w-120px src="../../assets/citizen.jpg" alt="">
    <img w-120px src="../../assets/citizen.jpg" alt="">
  </div>
</template>
