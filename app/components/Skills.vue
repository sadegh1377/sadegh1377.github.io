<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2 class="section-title">Skills</h2>
      <p class="section-subtitle">Technologies and tools I work with daily</p>
      <div class="skills-grid">
        <div v-for="(group, index) in skillGroups" :key="index" class="skill-group">
          <h3>{{ group.name }}</h3>
          <div class="skill-chips">
            <SkillChip v-for="skill in group.items" :key="skill" :name="skill" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillGroups = [
  {
    name: 'Frontend Architecture',
    items: ['Vue 2/3', 'Nuxt 2/3/4', 'SPA/SSR', 'TypeScript', 'Component Design']
  },
  {
    name: 'State & Data',
    items: ['Pinia', 'Vuex', 'API Integration', 'WebSockets']
  },
  {
    name: 'Forms & Validation',
    items: ['VeeValidate', 'Yup']
  },
  {
    name: 'UI Systems',
    items: ['Tailwind', 'Nuxt UI', 'Vuetify', 'Quasar', 'Bootstrap']
  },
  {
    name: 'Performance & Optimization',
    items: ['Lazy Loading', 'Rendering Strategies']
  },
  {
    name: 'Backend Collaboration',
    items: ['REST APIs', 'Node.js (working knowledge)']
  }
]
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}
.skill-group h3 {
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.skill-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
</style>