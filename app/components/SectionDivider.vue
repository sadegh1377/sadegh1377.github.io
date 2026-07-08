<template>
  <div class="divider-wrapper">
    <div class="divider"></div>
  </div>
</template>

<style scoped>
.divider-wrapper {
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
}
.divider {
  width: 80%;
  max-width: 600px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-cyan), var(--accent-purple), transparent);
  filter: drop-shadow(0 0 8px rgba(0,229,255,0.3));
}
</style>