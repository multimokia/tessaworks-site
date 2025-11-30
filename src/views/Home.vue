<template>
  <div class="max-w-7xl flex flex-col place-items-center gap-2 text-gray-200">
    <div class="relative h-1/2vh w-screen overflow-hidden">
      <div class="absolute -bottom-2/3 -left-1/12 w-[110vw] h-[110vh] z-[-1]">
        <Parallax />
      </div>
    </div>
    <div class="flex gap-10 flex-col md:flex-row ">
      <div class="flex flex-col gap-4 border-2 border-zinc-500 rounded-md p-2 bg-zinc-700/50 max-w-md">
        <h2 class="text-2xl font-bold">World Class Engineering</h2>
        Tessaworks represents world-class engineering, we've designed and produced thousands of items across a wide
        variety of industries. We run a completely vertically integrated production line, where everything from start
        to finish is managed by us to ensure the utmost quality and peace of mind.
      </div>
      <div class="flex flex-col gap-4 border-2 border-zinc-500 rounded-md p-2 bg-zinc-700/50 max-w-md">
        <h2 class="text-2xl font-bold">Industry Wide Solutions</h2>
        With experience on projects in fields ranging from rocketry, mining, robotics, weaponry, and more. You can be
        sure that no matter what needs doing, it can be done.
      </div>
      <div class="flex flex-col gap-4 border-2 border-zinc-500 rounded-md p-2 bg-zinc-700/50 max-w-md">
        <h2 class="text-2xl font-bold">Forward Thinking</h2>
        With decades of research in future technology, we've perfected construction of all our designs and optimized
        research paths for any future developments.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Parallax from "@/components/Parallax.vue";
</script>

<style scoped>

</style>