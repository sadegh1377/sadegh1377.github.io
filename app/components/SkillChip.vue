<template>
  <span class="skill-chip">
    {{ name }}
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string }>()
</script>

<style scoped>
.skill-chip {
  background: var(--bg-card);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-secondary);
  border: 1px solid var(--border-subtle);
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  cursor: default;
  transform: perspective(500px) rotateX(0) rotateY(0);
}

.skill-chip:hover {
  transform: perspective(500px) rotateX(5deg) rotateY(5deg);
  border-color: var(--accent-cyan);
  color: var(--text-primary);
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.15);
}
</style>