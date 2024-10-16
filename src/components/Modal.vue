<template>
  <transition name="modal" role="dialog">
    <div
      v-if="isOpen"
      class="modal-backdrop"
    >
      <div class="modal-wrapper flex justify-center place-items-center">
        <div class="bg-zinc-700 fixed w-fit flex flex-row justify-center place-items-center">
          <div class="">
            <div class="absolute float-end top-4 right-4 flex flex-row">
              <button
                type="button"
                class="close"
                @click="hideModal"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width={1.5}
                     stroke="currentColor"
                     class="size-10 hover:stroke-white transition-colors"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div class="p-4">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const emit = defineEmits(["hideModal"])
defineProps({ isOpen: Boolean });

function hideModal() {
  emit("hideModal");
}

</script>

<style scoped>
.modal-backdrop {
  box-sizing: content-box;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  //display: table-cell;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  height: 100%;
  width: 100%;
}
</style>