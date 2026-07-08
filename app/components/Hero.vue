<template>
  <section class="hero">
    <div class="container hero-content">
      <div class="hero-text">
        <h1>Hi, I'm <span class="highlight">M.Sadegh</span></h1>
        <p class="tagline">Frontend Developer · Vue/Nuxt Expert</p>
        <p class="bio">Building scalable, interactive web experiences with 5+ years of expertise.</p>
        <div class="cta-group">
          <a href="#projects" class="btn-primary">View Projects</a>
          <a href="#contact" class="btn-secondary">Contact Me</a>
        </div>
      </div>
      <div class="hero-3d">
        <ThreeBackground />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 4rem 0;
  position: relative;
}
.hero-content {
  display: flex;
  align-items: center;
  gap: 4rem;
  width: 100%;
}
.hero-text {
  flex: 1;
}
.hero-text h1 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin-bottom: 0.5rem;
}
.highlight {
  background: var(--gradient-cyan-purple);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.tagline {
  font-size: clamp(1.1rem, 1.5vw, 1.5rem);
  color: var(--text-secondary);
  margin-bottom: 1rem;
}
.bio {
  color: var(--text-muted);
  max-width: 500px;
  margin-bottom: 2rem;
}
.cta-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.btn-primary, .btn-secondary {
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  display: inline-block;
  border: none;
  cursor: pointer;
}
.btn-primary {
  background: var(--gradient-cyan-purple);
  color: #0B0D12;
  box-shadow: 0 4px 15px rgba(0,229,255,0.4);
}
.btn-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 25px rgba(0,229,255,0.6);
}
.btn-primary:active {
  transform: translateY(1px) scale(0.98);
}
.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--border-subtle);
}
.btn-secondary:hover {
  border-color: var(--accent-cyan);
  background: rgba(0,229,255,0.05);
  transform: translateY(-3px);
}
.hero-3d {
  flex: 1;
  height: 60vh;
  min-height: 300px;
  position: relative;
}
@media (max-width: 768px) {
  .hero-content { flex-direction: column; text-align: center; }
  .hero-3d { width: 100%; height: 40vh; min-height: 200px; }
  .bio { margin-left: auto; margin-right: auto; }
  .cta-group { justify-content: center; }
}
</style>