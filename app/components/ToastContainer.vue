<template>
  <Teleport to="body">
    <div class="toast-container" aria-live="polite" aria-atomic="true">
      <TransitionGroup name="toast" tag="div" class="toast-stack">
        <div
            v-for="toast in toasts"
            :key="toast.id"
            class="toast"
            :class="`toast--${toast.type}`"
            role="alert"
            @mouseenter="pause(toast.id)"
            @mouseleave="resume(toast.id)"
        >
          <div class="toast__icon">
            <svg v-if="toast.type === 'success'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <svg v-else-if="toast.type === 'error'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <svg v-else-if="toast.type === 'warning'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>

          <div class="toast__body">
            <p v-if="toast.title" class="toast__title">{{ toast.title }}</p>
            <p class="toast__message">{{ toast.message }}</p>
          </div>

          <button class="toast__close" @click="remove(toast.id)" aria-label="بستن">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <!-- Progress bar (pauses on hover) -->
          <div
              v-if="toast.duration"
              class="toast__progress"
              :class="{ 'is-paused': pausedIds.has(toast.id) }"
              :style="{ animationDuration: `${toast.duration}ms` }"
          ></div>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { toasts, remove } = useToast()

// Tracks which toasts have their auto-dismiss timer/progress paused on hover.
// Pairs with :class="{ 'is-paused': ... }" above — actually pausing the
// underlying dismiss timer still needs to happen inside useToast() (pause/resume
// hooks), this only freezes the visual progress bar in sync.
const pausedIds = ref(new Set<string | number>())

function pause(id: string | number) {
  pausedIds.value = new Set(pausedIds.value).add(id)
}
function resume(id: string | number) {
  const next = new Set(pausedIds.value)
  next.delete(id)
  pausedIds.value = next
}
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 1.25rem;
  inset-inline-end: 1.25rem;
  z-index: 9999;
  pointer-events: none;
}

.toast-stack {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

/* ===== Toast Base ===== */
.toast {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  width: min(380px, calc(100vw - 2.5rem));
  padding: 0.9rem 1rem;
  border-radius: 12px;
  background: rgba(24, 27, 36, 0.92);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
      0 10px 30px -8px rgba(0, 0, 0, 0.55),
      0 1px 0 rgba(255, 255, 255, 0.04) inset;
  pointer-events: auto;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.toast::before {
  content: '';
  position: absolute;
  inset-inline-start: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--toast-accent);
}

.toast:hover {
  transform: translateY(-2px);
  border-color: color-mix(in srgb, var(--toast-accent) 35%, transparent);
  box-shadow:
      0 14px 34px -8px rgba(0, 0, 0, 0.6),
      0 1px 0 rgba(255, 255, 255, 0.05) inset;
}

/* ===== Type colors ===== */
.toast--success { --toast-accent: #22C55E; }
.toast--error   { --toast-accent: #F43F5E; }
.toast--warning { --toast-accent: #F59E0B; }
.toast--info    { --toast-accent: #38BDF8; }

/* ===== Icon ===== */
.toast__icon {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 0.05rem;
  background: color-mix(in srgb, var(--toast-accent) 16%, transparent);
  color: var(--toast-accent);
}
.toast__icon svg {
  width: 15px;
  height: 15px;
}

/* ===== Text ===== */
.toast__body {
  flex: 1;
  min-width: 0;
  padding-top: 0.05rem;
}
.toast__title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary, #F1F5F9);
  margin: 0 0 0.15rem;
  line-height: 1.3;
}
.toast__message {
  font-size: 0.8125rem;
  color: var(--text-secondary, #9CA7B8);
  line-height: 1.45;
  margin: 0;
  word-break: break-word;
}

/* ===== Close button ===== */
.toast__close {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 6px;
  color: var(--text-muted, #6B7688);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}
.toast__close:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-primary, #F1F5F9);
}
.toast__close svg {
  width: 13px;
  height: 13px;
}

/* ===== Progress bar ===== */
.toast__progress {
  position: absolute;
  bottom: 0;
  inset-inline-start: 0;
  height: 2px;
  width: 100%;
  background: var(--toast-accent);
  opacity: 0.55;
  transform-origin: left;
  animation-name: toast-progress;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
[dir="rtl"] .toast__progress {
  transform-origin: right;
}
.toast__progress.is-paused {
  animation-play-state: paused;
}

@keyframes toast-progress {
  from { transform: scaleX(1); }
  to   { transform: scaleX(0); }
}

/* ===== Transitions ===== */
.toast-enter-active {
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}
.toast-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
  position: absolute;
  width: 100%;
}
.toast-enter-from {
  opacity: 0;
  transform: translateY(-8px) scale(0.97);
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(20%) scale(0.97);
}
[dir="rtl"] .toast-leave-to {
  transform: translateX(-20%) scale(0.97);
}
.toast-move {
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

/* ===== Responsive ===== */
@media (max-width: 480px) {
  .toast-container {
    top: auto;
    bottom: 1rem;
    inset-inline: 1rem;
  }
  .toast {
    width: 100%;
  }
}
</style>