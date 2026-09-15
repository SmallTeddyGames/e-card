<script lang='ts' setup>
import { toggleSound } from '@/utils'
const state = useGlobalState()

const toggle = () => {
  toggleSound()
}
</script>

<template>
  <button rounded p-2 hover="bg-active" @click="toggle" :title="state.soundEnabled ? 'Sound On' : 'Sound Off'">
    <div
      :class="state.soundEnabled ? 'i-material-symbols:volume-up-rounded' : 'i-material-symbols:volume-off-rounded'"
      text-2xl />
  </button>
</template>
