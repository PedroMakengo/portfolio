<template>
  <span
    class="bg-[#292C34] text-gray-500 flex gap-2 items-center px-8 py-2 rounded-3xl font-jetBrains"
  >
    <slot></slot>
    {{ title }}
  </span>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
});
</script>
