<template>
  <div class="spinner w-1/3 sm:w-5">
    <img
      src="/src/assets/tessaworks-logo-simple.png"
      alt="tessaworks-logo"
      class="animate-spin p-1"
    />
  </div>
</template>

<style scoped>
@keyframes spin {
  0% { transform: rotate(0); }
  100% { transform: rotate(720deg); }
}

.animate-spin {
  animation: spin 3s ease-in-out infinite;
  transition-timing-function: ease-in;
}

.spinner {
  background: radial-gradient(circle at center, #5c718a99 0, transparent 80%);
}
</style>
<script setup lang="ts">
</script>