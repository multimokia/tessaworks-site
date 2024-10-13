<template>
  <div class="relative top-1 flex flex-col flex-wrap justify-center gap-2 w-[50vw] h-[90vh] mosaic">
    <slot/>
  </div>
</template>

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
</style>