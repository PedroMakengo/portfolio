<template>
  <main>
    <Hero />
    <div class="flex items-center justify-center md:mt-4">
      <IconsDown class="animate-[upDown_1.2s_ease-in-out_infinite]" />
    </div>

    <section class="px-4 md:px-0 max-w-7xl mx-auto py-25 flex flex-col">
      <SectionTitle
        title="Meu Trabalho"
        details="Veja os projetos em destaque"
      />

      <div class="grid grid-col-1 md:grid-cols-3 gap-5 py-10 md:py-20">
        <NuxtLink
          :to="`/projeto-${index}`"
          class="bg-[#292C34] rounded-xl p-4"
          v-for="(element, index) in dataList"
          :key="index"
        >
          <img :src="`${element.img}`" class="w-full" :alt="element.title" />

          <div class="mt-4">
            <h2 class="text-white font-asap font-bold text-md">
              {{ element.title }}
            </h2>
            <p class="text-[#C0C4CE] font-maven font-regular">
              {{ element.description }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import projects from "@/mock/projets";
const dataList = projects;
</script>
