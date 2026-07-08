<template>
  <section class="min-h-[80vh] flex flex-col items-center justify-center text-center">
    <h1 class="text-8xl font-extrabold text-primary mb-4">{{ t('pageNotFound.errorNum') }}</h1>
    <p class="text-2xl mb-8">{{ t('pageNotFound.title') }}</p>
    <NuxtLink to="/" class="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition">
      {{ t('pageNotFound.backToHomeBtn') }}
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>