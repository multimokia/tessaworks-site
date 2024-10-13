<template>
  <MosiacGallery v-if="mq.mdPlus">
    <GalleryImage
      v-for="imagedata of images"
      :key="imagedata.src"
      :src="imagedata.src"
      :alt="imagedata.alt"
      :artist="imagedata.artist"
      :href="imagedata.url"
      :class="imagedata.className"
    />
  </MosiacGallery>
  <div v-else class="flex flex-col gap-4 items-center">
    <GalleryImage
      v-for="imagedata of images"
      :key="imagedata.src"
      :src="imagedata.src"
      :alt="imagedata.alt"
      :artist="imagedata.artist"
      :href="imagedata.url"
      :class="imagedata.className"
    />
  </div>
</template>

<script setup lang="ts">
//https://flexboxpatterns.com/mosaic
import GalleryImage from "../components/GalleryImage.vue";
import MosiacGallery from "@/components/MosiacGallery.vue";
import { useMq } from "vue3-mq";

const mq = useMq();

const images = [
  {
    src: "/gallery-images/tessa-hug.png",
    alt: "Tessa hugging another OC named Lisbeth",
    artist: "Inku",
    url: "https://x.com/inkudraws",
    className: "art-large"
  },
  {
    src: "/gallery-images/tessa-damaged.jpg",
    alt: "Tessa sitting against a workstation in her lab. Her left arms is broken off revealing metal shards and broken wires.",
    artist: "9_9bird",
    url: "https://x.com/9_9bird",
    className: "art-medium"
  },
  {
    src: "/gallery-images/tessa-bg.jpg",
    alt: "Tessa standing by a space-station window, overlooking the planet below. She seems melancholic.",
    artist: "9_9bird",
    url: "https://x.com/9_9bird",
    className: "art-large"
  },
  {
    src: "/gallery-images/tessa-moon.png",
    alt: "Tessa sitting melancholically on the moon, staring off into the distance.",
    artist: "Briar Young",
    url: "https://youtube.com/@briaryoungmmd?si=HZUq6k94GML7sL_G",
    className: "art-medium"
  },
  {
    src: "/gallery-images/tessa-shahala.jpg",
    alt: "Tessa with her back turned to the camera, facing off against Sha'Hala from Remnant 2. A smirk is on her face",
    artist: "9_9bird",
    url: "https://x.com/9_9bird",
    className: "art-medium"
  },
]
</script>

<style scoped>
.art-small {
  width: 30vw;
}

.art-medium {
  width: 50vw;
}

.art-large {
  width: 70vw;
}
</style>