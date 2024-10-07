<template>
<div class="relative top-1 flex flex-col flex-wrap justify-center gap-2 w-[50vw] h-[100vh] mosaic">
  <GalleryImage
    src="/gallery-images/tessa-hug.png"
    alt="Tessa"
    artist="Inku"
    class="art-large"
  />
  <GalleryImage
    src="/gallery-images/tessa-damaged.jpg"
    alt="Tessa"
    artist="9_9bird"
    class="art-medium"
  />
  <GalleryImage
    src="/gallery-images/tessa-bg.jpg"
    alt="Tessa"
    artist="9_9bird"
    class="art-small"
  />
  <GalleryImage
    src="/gallery-images/tessa-moon.png"
    alt="Tessa"
    artist="Briar Young"
    class="art-large"
  />
  <GalleryImage
    src="/gallery-images/tessa-shahala.jpg"
    alt="Tessa"
    artist="9_9bird"
    class="art-small"
  />
</div>
</template>

<script setup lang="ts">
//https://flexboxpatterns.com/mosaic
import GalleryImage from "../components/GalleryImage.vue";
</script>

<style scoped>
.mosaic div {
  position: relative;
}

.mosaic div::after {
  display: block;
  width: 11px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 100%;
  visibility: hidden;
  content: "";
}

.art-small {
  height: 30vh;
}

.art-medium {
  height: 50vh;
}

.art-large {
  height: 70vh;
}
</style>