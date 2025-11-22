<template>
  <h1>Minhas Notícias - {{ route.params.projeto }}</h1>

  <NuxtLink to="/">Home</NuxtLink>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
