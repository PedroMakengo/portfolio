<template>
  <section
    class="px-4 h-[760px] md:px-0 bg-[url(/image/hero.svg)] md:h-[650px] bg-cover bg-center bg-no-repeat text-white py-5"
  >
    <div
      class="flex flex-col justify-center text-center items-center gap-4 h-full"
    >
      <img
        src="https://avatars.githubusercontent.com/u/61626420?v=4"
        class="w-20 h-20 rounded-full"
        alt=""
      />
      <div class="flex flex-col gap-2">
        <h4
          class="text-gray-500 text-center font-jetBrains flex flex-col lg:flex-wrap items-center justify-center gap-1"
        >
          <span>Hello World! Meu nome é</span>

          <span
            ref="typingEl"
            class="inline-block overflow-hidden whitespace-nowrap border-r-2 border-red-400 text-red-400 typing"
          >
            Pedro Makengo
          </span>

          <span>e sou</span>
        </h4>
        <h1 class="font-bold text-3xl md:text-5xl font-asap">
          Desenvolvedor Fullstack
        </h1>
        <p class="text-gray-400 md:w-3xl font-maven">
          Transformo necessidades em aplicações reais, evolventes e funcionais.
          Desenvolvo sistemas através da minha paixão pela tecnologia,
          contribuindo com soluções inovadoras e eficazes para desafios
          complexos.
        </p>
      </div>

      <div class="flex gap-4 flex-wrap justify-center mt-4 md:mt-6">
        <TecnologiaChips title="Github">
          <IconsGithub />
        </TecnologiaChips>
        <TecnologiaChips title="HTML">
          <IconsHtml />
        </TecnologiaChips>
        <TecnologiaChips title="CSS">
          <IconsCss />
        </TecnologiaChips>
        <TecnologiaChips title="Javascript">
          <IconsJs />
        </TecnologiaChips>
        <TecnologiaChips title="Vue">
          <IconsVueJs />
        </TecnologiaChips>
        <TecnologiaChips title="Node">
          <IconsNode />
        </TecnologiaChips>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const typingEl = ref<HTMLElement | null>(null);
let interval: number;

const restartTyping = () => {
  if (!typingEl.value) return;

  typingEl.value.classList.remove("typing");
  void typingEl.value.offsetWidth; // força reflow
  typingEl.value.classList.add("typing");
};

onMounted(() => {
  interval = window.setInterval(restartTyping, 3500);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>
