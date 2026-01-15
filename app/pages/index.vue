<template>
  <main>
    <Hero />

    <div class="flex items-center justify-center md:mt-4">
      <IconsDown class="animate-[upDown_1.2s_ease-in-out_infinite]" />
    </div>

    <section
      class="px-4 md:px-0 max-w-7xl mx-auto pt-25 flex flex-col py-20 gap-15"
    >
      <SectionTitle
        title="Meu Trabalho"
        details="Veja os projetos em destaque"
      />

      <div class="grid grid-col-1 md:grid-cols-3 gap-5">
        <CardProject
          v-for="(element, index) in projects"
          :image="element.img"
          :title="element.title"
          :description="element.description"
          :key="index"
          target="_blank"
          :link="`/${element.to}`"
        />
      </div>
    </section>

    <section class="px-4 md:px-0 py-25 bg-[#0D0E11]">
      <div class="max-w-7xl mx-auto flex flex-col gap-15">
        <SectionTitle
          title="Meus Serviços"
          details="Como posso ajudar o seu negócio"
        />

        <div class="grid grid-col-1 md:grid-cols-3 text-white gap-5">
          <CardService
            title="Websites e Aplicativos"
            description="Desenvolvimento de interfaces"
          >
            <IconsDevice />
          </CardService>

          <CardService
            title="API e banco de dados"
            description="Criação de serviços do sistema"
          >
            <IconsHardDrive />
          </CardService>
          <CardService
            title="DevOps"
            description="Gestão e infraestrutura da aplicação"
          >
            <IconsInfinity />
          </CardService>
        </div>
      </div>
    </section>

    <!-- <section class="px-4 md:px-0 py-25 max-w-7xl mx-auto flex flex-col gap-15">
      <SectionTitle
        title="Meu Blog"
        details="Veja alguns conteúdos que partilho"
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <NuxtLink
          :to="`/`"
          v-for="index in 6"
          :key="index"
          class="flex flex-col"
        >
          <img
            src="https://thumbs.web.sapo.io/?H=405&W=607&crop=center&delay_optim=1&epic=V2%3Anp3CX8aNdSKZyPzrUhzGI6OQCaaH6szJvJ%2FrQL7OVFgNEvqgUGaJF%2FgwXjQ%2B6i06cFHThOLyWW9QXIDNUBkeUij1jOey6%2BOhXwg6VkZ3VTRfJpNeZyLmfGyATkT1Ini%2F&png=0&Q=80&tv=1"
            alt=""
            class="w-full h-[220px] object-cover rounded-md"
          />
          <div class="mt-4 flex flex-col">
            <h2 class="text-white font-asap font-bold text-xl md:text-2xl">
              Era da computação quântica está mais próxima e mapa para a
              "vantagem quântica" está definido
            </h2>
            <p class="text-[#C0C4CE] font-maven font-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              adipisci rerum ipsum maiores accusantium
            </p>
          </div>
        </NuxtLink>
      </div>
    </section> -->

    <Footer />
  </main>
</template>

<script lang="ts" setup>
import projects from "@/mock/projets";
</script>
