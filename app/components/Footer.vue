<template>
  <footer class="footer">
    <div class="container footer-content">
      <p>&copy; 2026 Mohammad Sadegh Hadipour</p>
      <div class="footer-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border-subtle);
  padding: 2rem 0;
  margin-top: 2rem;
}
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-muted);
  font-size: 0.9rem;
}
.footer-links {
  display: flex;
  gap: 1.5rem;
}
.footer-links a {
  color: var(--text-muted);
  transition: color 0.3s;
}
.footer-links a:hover { color: var(--text-secondary); }
@media (max-width: 768px) {
  .footer-content { flex-direction: column; gap: 1rem; text-align: center; }
}
</style>