<template>
  <PhotoAlbum
    :photos="images"
    layout="masonry"
    class="max-w-screen-lg"
    :photo-renderer="GalleryImage"
    @click="handlePhotoClick"
  />
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { PhotoAlbum } from "vue-photo-album";
import GalleryImage from "@/components/GalleryImage.vue";

function handlePhotoClick(payload) {
  console.log(payload);
}

const images = ref([
  {
    src: "/gallery-images/tessa-damaged.jpg",
    alt: "Tessa sitting against a workstation in her lab. Her left arms is broken off revealing metal shards and broken wires.",
    artist: "9_9bird",
    url: "https://x.com/9_9bird",
    className: "art-medium",
    width: 1700,
    height: 2200,
  },
  {
    src: "/gallery-images/tessa-bg.jpg",
    alt: "Tessa standing by a space-station window, overlooking the planet below. She seems melancholic.",
    artist: "9_9bird",
    url: "https://x.com/9_9bird",
    className: "art-large",
    width: 2681,
    height: 1992,
  },
  {
    src: "/gallery-images/tessa-moon.png",
    alt: "Tessa sitting melancholically on the moon, staring off into the distance.",
    artist: "Briar Young",
    url: "https://youtube.com/@briaryoungmmd?si=HZUq6k94GML7sL_G",
    className: "art-medium",
    width: 1080,
    height: 1920,
  },
  {
    src: "/gallery-images/tessa-hug.png",
    alt: "Tessa hugging another OC named Lisbeth",
    artist: "Inku",
    url: "https://x.com/inkudraws",
    className: "art-large",
    width: 5035,
    height: 3567,
  },
  {
    src: "/gallery-images/tessa-shahala.jpg",
    alt: "Tessa with her back turned to the camera, facing off against Sha'Hala from Remnant 2. A smirk is on her face",
    artist: "9_9bird",
    url: "https://x.com/9_9bird",
    className: "art-medium",
    width: 2388,
    height: 1508,
  },
]);
</script>