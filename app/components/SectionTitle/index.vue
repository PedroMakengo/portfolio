<template>
  <div class="text-white text-center flex flex-col gap-2">
    <h3 class="text-red-400 font-jetBrains md:text-2xl">{{ title }}</h3>
    <h2 class="font-asap font-bold text-2xl md:text-3xl">{{ details }}</h2>
    <p class="text-[#C0C4CE] font-maven text-md font-regular">
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  details: String,
  description: String,
});
</script>
