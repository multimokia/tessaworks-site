<template>
  <div class="w-2/3 px-4">
    <PhotoAlbum
      :photos="images"
      layout="masonry"
      :photo-renderer="GalleryImage"
      @click="handlePhotoClick"
    />
  </div>
  <Transition name="slide-fade">
    <Modal :is-open="isModalOpen" @hide-modal="handleModalHide">
      <div class="flex gap-4 flex-col max-w-2/3vw">
        <div class="w-full flex flex-col items-center">
          <img
            :src="selectedImage.src"
            :alt="selectedImage.alt"
            class="max-h-2/3vh max-w-2/3vw bg-zinc-800"
          />
        </div>
        <span>Art by <a :href="selectedImage.url">{{ selectedImage.artist }}</a></span>
        <hr class="border-zinc-500"/>
        {{ selectedImage.alt }}
      </div>
    </Modal>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import {PhotoAlbum, PhotoClickPayload} from "vue-photo-album";
import GalleryImage from "@/components/GalleryImage.vue";
import { PhotoWithArtistData } from "@/types/PhotoWithArtistData.ts";
import Modal from "@/components/Modal.vue";

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
  {
    src: "/gallery-images/tessa-tarot.png",
    alt: "A tarot card, 'The Magician' with Tessa as the focus. Her left hand is raised, but empty. Her eyes glow with a faint blue. Her hair floats up and the cosmos in the background spiral in toward her. The warp core in her abdomen glows with an event horizon surround it as her right hand holds the strings of light. Clocks adorn the white borders of the piece.",
    artist: "XShurin",
    url: "https://www.pixiv.net/en/users/29790126",
    className: "art-large",
    width: 963,
    height: 1663,
  },
]);

const selectedImage = ref<PhotoWithArtistData>(images.value[0]);
const isModalOpen = ref(false);

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}

function handleModalHide() {
  closeModal();
}

function handlePhotoClick(payload: PhotoClickPayload<PhotoWithArtistData>) {
  selectedImage.value = payload.photo;
  openModal();
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