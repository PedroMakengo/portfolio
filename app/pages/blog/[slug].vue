<template>
  <h1>Minhas Notícias - {{ route.params.slug }}</h1>

  <NuxtLink to="/">Home</NuxtLink>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
