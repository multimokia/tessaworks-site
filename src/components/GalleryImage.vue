<template>
<div class="sm:max-w-1/3">
  <img :src="src" :alt="alt" class="rounded-md" />
  <span class="text-gray-500 p-6">
    Art by <a :href="href" target="_blank">{{ artist }}</a>
  </span>
</div>
</template>

<script lang="ts">
import Footer from "./Footer.vue";

export default {
  components: {Footer},
  props: {
    src: String,
    alt: String,
    artist: String,
    href: String,
  },
  setup() {  }
}
</script>
<style scoped>
a {
  color: #7379bf;
}

a:hover {
  color: #5e64c5;
}
</style>