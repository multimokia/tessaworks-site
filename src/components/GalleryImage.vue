<template>
<div class="">
  <img :src="photo.src" :alt="photo.alt" class="rounded-md" />
  <span class="text-gray-500">
    Art by <a :href="photo.href" target="_blank">{{ photo.artist }}</a>
  </span>
</div>
</template>

<script setup lang="ts">
import { type PhotoRendererMetadata } from "vue-photo-album";

type GalleryImageProps = PhotoRendererMetadata & {
  artist?: String,
  href?: String,
};

defineProps<GalleryImageProps>();

</script>
<style scoped>
a {
  color: #7379bf;
}

a:hover {
  color: #5e64c5;
}
</style>