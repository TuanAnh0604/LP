<template>
  <div class="min-h-screen bg-gradient-to-b from-[#fdf4dc] via-[#fcf0d0] to-[#fbeec2] font-sans text-gray-800">
    <Navbar />
    <CallAction />
    <MainLy />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import MainLy from './components/MainLy.vue'
</script>

<style scoped></style>
