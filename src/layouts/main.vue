<template>
  <div relative w-full h-full box-border>
    <div
      position="absolute inset-4"
      border="1px solid gray-400/50 rounded-2"
      flex
      flex-col
    >
      <Header></Header>
      <main flex-1>
        <RouterView />
      </main>
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
</script>
