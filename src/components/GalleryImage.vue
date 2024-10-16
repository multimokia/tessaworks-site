<template>
<div class="">
  <img :src="photo.src" :alt="photo.alt" class="rounded-md" />
  <span class="text-gray-500">
    Art by <a :href="photo.url" target="_blank">{{ photo.artist }}</a>
  </span>
</div>
</template>

<script setup lang="ts">
import { type PhotoRendererMetadata } from "vue-photo-album";
import { PhotoWithArtistData } from "@/types/PhotoWithArtistData.ts";


type GalleryImageProps = PhotoRendererMetadata & {
  photo: PhotoWithArtistData
};

defineProps<GalleryImageProps>();

</script>
<style scoped>
</style>