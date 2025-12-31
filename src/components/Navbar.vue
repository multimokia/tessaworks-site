<template>
<div class="navbar h-1/6 space-x-4 place-items-center text-white drop-shadow-md">
  <RouterLink to="/">
    <img
      src="@/assets/tessaworks-logo-full.png"
      alt="Tessaworks logo with typeface"
      class="max-h-28 px-6"
    />
  </RouterLink>
  <ul class="menu menu-horizontal">
    <li><RouterLink to="/">Home</RouterLink></li>
    <li><RouterLink to="/designs">Designs</RouterLink></li>
    <li><RouterLink to="/about">About</RouterLink></li>
  </ul>

</div>
</template>

<style scoped>
.navbar {
  /* rgba(232, 233, 213, 0.6) */
  background: linear-gradient(135deg, rgba(72, 55, 92, 0.8) 0%, transparent 60%);
}
@media (prefers-color-scheme: light) {
  .navbar {
    color: #e8e9d5;
  }
}

@media (prefers-color-scheme: dark) {
  .navbar {
    color: #e8e9d5;
  }
}

</style>