<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-grid">
        <div class="about-text">
          <p>
            I'm a <strong>product‑focused Frontend Developer</strong> with 5+ years of experience
            designing and building scalable Vue/Nuxt applications from the ground up.
          </p>
          <p>
            I've architected complex platforms across e‑learning, e‑commerce, booking, and logistics,
            owning full frontend lifecycles — from system design to deployment.
          </p>
          <p>
            I thrive on creating performant, user‑centric interfaces with clean, maintainable code.
          </p>
          <div class="stats">
            <div class="stat-item">
              <span class="stat-number">5+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">12+</span>
              <span class="stat-label">Projects Delivered</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
        <div class="about-visual">
          <!-- Could be an avatar or code snippet, we'll use a floating 3D box -->
          <div class="floating-box"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 2rem;
}
.about-text p {
  color: var(--text-secondary);
  margin-bottom: 1.2rem;
}
.about-text strong {
  color: var(--text-primary);
}
.stats {
  display: flex;
  gap: 2.5rem;
  margin-top: 2rem;
}
.stat-item {
  display: flex;
  flex-direction: column;
}
.stat-number {
  font-size: 2.2rem;
  font-weight: 800;
  background: var(--gradient-cyan-purple);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.stat-label {
  font-size: 0.9rem;
  color: var(--text-muted);
}
.about-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}
.floating-box {
  width: 200px;
  height: 200px;
  background: var(--gradient-cyan-purple);
  border-radius: 30px;
  transform: rotate(15deg) scale(0.9);
  box-shadow: 0 30px 60px rgba(0,229,255,0.2);
  animation: float 6s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: rotate(15deg) translateY(0) scale(0.9); }
  50% { transform: rotate(25deg) translateY(-20px) scale(1); }
}
@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; gap: 2rem; }
  .stats { justify-content: center; }
  .floating-box { width: 150px; height: 150px; }
}
</style>