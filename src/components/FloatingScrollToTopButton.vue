<template>
  <div
    class="fixed bottom-3 right-3 rounded-full bg-[#303d33] p-3 cursor-pointer drop-shadow-md hover:bg-[#4e6352] transition-colors"
    @click="scrollToTop"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}
</script>

<style scoped>

</style>