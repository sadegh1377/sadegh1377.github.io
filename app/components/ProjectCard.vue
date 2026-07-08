<template>
  <div class="project-card">
    <div class="card-glow"></div>
    <div class="card-content">
      <h3>{{ project.title }}</h3>
      <p class="project-desc">{{ project.description }}</p>
      <div class="project-tags">
        <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <a :href="project.link" class="card-link" target="_blank" rel="noopener">Case Study →</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  project: {
    id: number
    title: string
    description: string
    tags: string[]
    link: string
  }
}>()
</script>

<style scoped>
.project-card {
  background: var(--bg-card);
  border-radius: 16px;
  padding: 1.8rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: var(--shadow-card);
  transform: translateY(0);
  will-change: transform, box-shadow;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow: var(--shadow-card-hover);
  background: var(--bg-card-hover);
}

.project-card:hover .card-glow {
  opacity: 1;
}

.card-glow {
  position: absolute;
  top: -2px;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-cyan-purple);
  opacity: 0;
  transition: opacity 0.4s;
  border-radius: 16px 16px 0 0;
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-card h3 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.project-desc {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1.2rem;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background: rgba(0, 229, 255, 0.08);
  padding: 0.2rem 0.8rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--accent-cyan);
  border: 1px solid rgba(0, 229, 255, 0.15);
}

.card-link {
  color: var(--accent-cyan);
  font-weight: 600;
  align-self: flex-start;
  transition: all 0.3s;
  border-bottom: 2px solid transparent;
}

.card-link:hover {
  border-bottom-color: var(--accent-cyan);
  transform: translateX(4px);
}
</style>