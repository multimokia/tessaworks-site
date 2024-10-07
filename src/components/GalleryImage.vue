<template>
<div class="max-w-1/3">
  <img :src="src" :alt="alt" class="rounded-md" />
  <span class="text-gray-500 p-6">Art by {{ artist }}</span>
  <Footer class="w-full"/>
</div>
</template>

<script lang="ts">
import Footer from "./Footer.vue";

export default {
  components: {Footer},
  props: {
    src: String,
    alt: String,
    artist: String
  },
  setup() {  }
}
</script>
<style scoped>

</style>