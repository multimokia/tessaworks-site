<template>
  <Navbar />
  <h1 class="relative font-bold text-7xl right-1/4 text-transparent font-outline-2">{{ $route.name }}</h1>
  <RouterView/>
  <Footer class="w-screen"/>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>
</style>
