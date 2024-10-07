<template>
  <div class="flex flex-row w-3/4 place-items-center">
    <hr class="flex-grow"/>
    <spinning-logo class="!w-1/12 p-3 spinner"/>
    <hr class="flex-grow"/>
  </div>
</template>

<script setup lang="ts">

import SpinningLogo from "@/components/SpinningLogo.vue";
</script>

<style scoped>
.spinner {
  background: radial-gradient(circle at center, #5c718a99 0, transparent 60%);
}
</style>