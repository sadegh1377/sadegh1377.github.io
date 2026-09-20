<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Let's Connect</h2>
      <p class="section-subtitle">Have a project in mind? Reach out.</p>
      <div class="contact-grid">
        <div class="contact-info">
          <p><strong>Email</strong><br><a href="mailto:sadeghhadipour1@gmail.com">sadeghhadipour1@gmail.com</a></p>
          <p><strong>Phone</strong><br><a href="tel:09118161416">09118161416</a></p>
          <p><strong>Location</strong><br>
            <span class="location">Tehran</span>
          </p>
          <div class="social-links">
            <a href="https://github.com/sadegh1377" class="social-link" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/sadegh-hadipour-b3b62a192/" class="social-link" target="_blank">LinkedIn</a>
          </div>
        </div>
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group">
            <input type="text" id="name" v-model="form.name" placeholder="Your Name" required/>
          </div>
          <div class="form-group">
            <input type="email" id="email" v-model="form.email" placeholder="Your Email" required/>
          </div>
          <div class="form-group">
            <textarea id="message" v-model="form.message" rows="5" placeholder="Message" required></textarea>
          </div>
          <button type="submit" class="btn-primary" :disabled="isSubmitting">
            {{ isSubmitting ? 'در حال ارسال...' : 'Send Message' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = reactive({name: '', email: '', message: ''})
const isSubmitting = ref(false)

const toast = useToast()

const submitForm = async () => {
  isSubmitting.value = true
  try {
    await $fetch('/api/send-message', {
      method: 'POST',
      body: {...form},
    })
    Object.assign(form, {name: '', email: '', message: ''})

    toast.success('Your message was sent successfully!', 'Success')
  } catch (err) {
    console.error(err)
    toast.error('Failed to send the message. Please try again.', 'Error')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  margin-top: 2rem;
}

.contact-info p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.contact-info a {
  color: var(--accent-cyan);
  transition: color 0.3s;
}

.contact-info a:hover {
  color: var(--accent-purple);
}

.social-links {
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.social-link {
  color: var(--text-secondary);
  font-weight: 500;
  transition: all 0.3s;
  display: inline-block;
}

.social-link:hover {
  color: var(--accent-cyan);
  transform: scale(1.1) rotateY(-5deg);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem 1.2rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  color: var(--text-primary);
  font-family: inherit;
  transition: all 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-cyan);
  box-shadow: 0 0 0 3px rgba(0, 229, 255, 0.15);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-muted);
}

.contact-form .btn-primary {
  align-self: flex-start;
  padding: 0.8rem 2.5rem;
}

.location {
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-form .btn-primary {
    align-self: stretch;
  }
}
</style>