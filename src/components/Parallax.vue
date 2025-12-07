<template>
  <div class="relative w-full h-full flex flex-col items-center">
    <div class="h-full flex flex-row items-center">
      <div
        ref="target"
        class="relative overflow-hidden w-full h-full"
        :style="targetStyle"
      >
        <div :style="layer0">
          <img class="absolute object-cover" :src="bg" />
        </div>

        <div :style="layer1">
          <img class="absolute animate-hover" :src="bigArmsBack" />
        </div>

        <div :style="layer2">
          <img class="absolute animate-spin" :src="blackHoleVortex" style="transform-origin: 49% 47%" />
          <img class="absolute animate-spin" :src="blackHoleCore" style="transform-origin: 49% 47%" />
          <img class="absolute animate-spin-reverse" :src="blackHoleOtherCores" style="transform-origin: 49% 47%" />
        </div>

        <div :style="layer1">
          <img class="absolute animate-hover" :src="bigArmsFront" />
        </div>

        <div :style="layer4">
          <div class="animate-hover-large">
            <img class="absolute" :src="tessa" />
            <img class="absolute animate-pulse" :src="tessaGlow" />
          </div>
        </div>

        <div :style="layer5">
          <img class="absolute animate-hover-slow" :src="smallArms" />
        </div>

        <div class="absolute bottom-10 right-0">
          <img class="w-1/2 h-1/2" :src="signature" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "@vue/reactivity";
import {computed, CSSProperties, useTemplateRef} from "vue";
import {useParallax} from "@vueuse/core";

import bg from "@/assets/tessa-parallax/bg.png";
import bigArmsBack from "@/assets/tessa-parallax/big-arms.png";
import blackHoleVortex from "@/assets/tessa-parallax/vortex2.png";
import blackHoleCore from "@/assets/tessa-parallax/black-hole-core2.png";
import blackHoleOtherCores from "@/assets/tessa-parallax/cores2.png";
import bigArmsFront from "@/assets/tessa-parallax/big-arms-front.png";
import tessa from "@/assets/tessa-parallax/tessa-noglow.png"
import tessaGlow from "@/assets/tessa-parallax/tessa-glow.png"
import smallArms from "@/assets/tessa-parallax/small-arms.png"
import signature from "@/assets/tessa-parallax/signature.png"

const target = useTemplateRef('target');
const parallax = reactive(useParallax(target));

const targetStyle: CSSProperties = {
  aspectRatio: '11/6',
};

const layerBase: CSSProperties = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  transition: '.3s ease-out all',
};

const layer0 = computed(() => ({
  ...layerBase,
  transform: `translate3d(${parallax.tilt * 10}px, ${parallax.roll * 10}px, 0px)`,
}));

const layer1 = computed(() => ({
  ...layerBase,
  transform: `translate3d(${parallax.tilt * 20}px, ${parallax.roll * 20}px, 0px)`,
}));

const layer2 = computed<CSSProperties>(() => ({
  ...layerBase,
  // @ts-expect-error this is fine
  top: `-${target.value?.clientHeight / 1.6}px`,
  transform: `translate3d(${parallax.tilt * 30}px, ${parallax.roll * 30}px, 0px)`,
}));

const layer3 = computed(() => ({
  ...layerBase,
  transform: `translate3d(${parallax.tilt * 40}px, ${parallax.roll * 40}px, 0px)`,
}));

const layer4 = computed(() => ({
  ...layerBase,
  transform: `translate3d(${parallax.tilt * 50}px, ${parallax.roll * 50}px, 0px)`,
}));

const layer5 = computed(() => ({
  ...layerBase,
  transform: `translate3d(${parallax.tilt * 60}px, ${parallax.roll * 60}px, 0px)`,
}));

</script>

<style scoped>
img {
  pointer-events: none;
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>