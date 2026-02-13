<template>
  <header flex justify-between items-center p-4>
    {{ num }}
  </header>
</template>

<script setup lang="ts">
import { useCountState } from '@/stores/count'
import { storeToRefs } from 'pinia'

const countState = useCountState()
const { num } = storeToRefs(countState)
</script>
