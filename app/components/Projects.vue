<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">Projects</h2>
      <p class="section-subtitle">Some of the platforms I've built from the ground up</p>
      <div class="project-grid">
        <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { projects } = useProjects()
</script>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}
@media (max-width: 768px) {
  .project-grid { grid-template-columns: 1fr; gap: 1.5rem; }
}
</style>