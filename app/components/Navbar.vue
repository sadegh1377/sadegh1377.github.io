<template>
  <header class="navbar">
    <div class="container nav-container">
      <NuxtLink to="/" class="logo">MSH</NuxtLink>
      <ul class="nav-links" :class="{ 'open': isOpen }">
        <li><a href="#about" @click="closeMenu">About</a></li>
        <li><a href="#skills" @click="closeMenu">Skills</a></li>
        <li><a href="#projects" @click="closeMenu">Projects</a></li>
        <li><a href="#contact" @click="closeMenu">Contact</a></li>
      </ul>
      <button class="hamburger" @click="toggleMenu" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
const isOpen = ref(false)
const toggleMenu = () => { isOpen.value = !isOpen.value }
const closeMenu = () => { isOpen.value = false }

// Close on outside click (optional)
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(11, 13, 18, 0.7);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}
.logo {
  font-weight: 800;
  font-size: 1.8rem;
  background: var(--gradient-cyan-purple);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(0,229,255,0.2);
}
.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
  transition: all 0.3s;
}
.nav-links a {
  color: var(--text-secondary);
  font-weight: 500;
  position: relative;
  transition: color 0.3s;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--gradient-cyan-purple);
  transition: all 0.3s;
  transform: translateX(-50%);
}
.nav-links a:hover {
  color: var(--text-primary);
}
.nav-links a:hover::after {
  width: 100%;
}
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  transition: 0.3s;
}
.hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

@media (max-width: 768px) {
  .hamburger { display: flex; }
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--bg-primary);
    padding: 1.5rem;
    gap: 1rem;
    transform: translateY(-120%);
    opacity: 0;
    pointer-events: none;
    border-bottom: 1px solid var(--border-subtle);
  }
  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }
}
</style>