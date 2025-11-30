<template>
  <Navbar />
  <h1
    v-if="shouldDisplayRouteName"
    class="relative font-bold text-7xl text-transparent font-outline-2 left-2 md:right-1/4 sm:left-auto"
  >
    {{ $route.name }}
  </h1>
  <RouterView class="px-4" ref="routerView"/>
  <Transition name="fade">
    <FloatingScrollToTopButton v-if="isTopOfPage" />
  </Transition>
  <Footer class="w-screen"/>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import FloatingScrollToTopButton from "@/components/FloatingScrollToTopButton.vue";
import { onMounted, onUnmounted, ref } from '@vue/runtime-core';
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();

const isTopOfPage = ref<boolean>(false);
const shouldDisplayRouteName = computed(() => route.name !== "Tessaworks")


function handleScroll() {
  isTopOfPage.value = window.scrollY > 0;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
})
</script>

<style scoped>

</style>
