<template>
  <div
    class="border-2 border-[#16181D] h-[190px] rounded-2xl p-6 flex flex-col justify-center"
  >
    <slot></slot>
    <div class="flex flex-col mt-6 gap-1">
      <h4 class="text-white font-asap font-bold text-lg">
        {{ title }}
      </h4>
      <span class="text-[#C0C4CE] font-maven font-regular text-sm">{{
        description
      }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  description: String,
});
</script>
