<template>
  <NuxtLink :to="`/${link}`" class="bg-[#292C34] rounded-xl p-4">
    <img :src="`${image}`" class="w-full" :alt="title" />

    <div class="mt-4">
      <h2 class="text-white font-asap font-bold text-md">
        {{ title }}
      </h2>
      <p class="text-[#C0C4CE] font-maven font-regular">
        {{ description }}
      </p>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps({
  link: String,
  image: String,
  title: String,
  description: String,
});
</script>
