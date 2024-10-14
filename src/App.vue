<template>
  <Navbar />
  <h1 class="relative font-bold text-7xl text-transparent font-outline-2 left-2 md:right-1/4 sm:left-auto">{{ $route.name }}</h1>
  <RouterView class="px-4" ref="routerView"/>
  <transition name="fade" mode="out-in">
    <FloatingScrollToTopButton />
  </transition>
  <Footer class="w-screen"/>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import FloatingScrollToTopButton from "@/components/FloatingScrollToTopButton.vue";
</script>

<style scoped>
</style>
