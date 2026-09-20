<template>
  <section class="min-h-[80vh] flex flex-col gap-4 items-center justify-center text-center">
    <h1 class="text-9xl font-extrabold text-primary">{{ t('pageNotFound.errorNum') }}</h1>
    <p class="text-2xl">{{ t('pageNotFound.title') }}</p>
    <NuxtLink to="/" class="btn-primary">
      {{ t('pageNotFound.backToHomeBtn') }}
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>