<template>
<img
  src="/src/assets/tessaworks-logo-simple.png"
  alt="tessaworks-logo"
  class="w-1/3 animate-spin overflow-hidden"
/>
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
</style>