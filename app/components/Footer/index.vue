<template>
  <footer
    class="py-25 bg-[url(/image/contact.svg)] bg-no-repeat bg-cover flex flex-col gap-15"
  >
    <SectionTitle
      title="Contacto"
      details="Gostou do meu trabalho"
      description="Entre em contato ou acompanhe as minhas redes sociais!"
    />

    <div class="mx-auto max-w-sm w-full flex flex-col gap-4">
      <NuxtLink
        to="https://www.linkedin.com/in/pedro-makengo-32ab0a1a0/"
        class="w-full bg-[#292C34] hover:bg-[#24262c] duration-350 p-4 rounded-md flex justify-between items-center"
      >
        <div class="flex gap-4 font-maven font-medium text-[#C0C4CE]">
          <IconsLinkedin />
          <span>Linkedin</span>
        </div>
        <IconsArrowUpRight />
      </NuxtLink>

      <NuxtLink
        to="https://www.instagram.com/pedro_makengo/"
        class="w-full bg-[#292C34] hover:bg-[#24262c] duration-350 p-4 rounded-md flex justify-between items-center"
      >
        <div class="flex gap-4 font-maven font-medium text-[#C0C4CE]">
          <IconsInstagram />
          <span>Instagram</span>
        </div>
        <IconsArrowUpRight />
      </NuxtLink>
      <NuxtLink
        to="https://github.com/pedromakengo"
        class="w-full bg-[#292C34] hover:bg-[#24262c] duration-350 p-4 rounded-md flex justify-between items-center"
      >
        <div class="flex gap-4 font-maven font-medium text-[#C0C4CE]">
          <IconsGithub />
          <span>Github</span>
        </div>
        <IconsArrowUpRight />
      </NuxtLink>
      <NuxtLink
        to="mailto:devmakengo2021@gmail.com"
        class="w-full bg-[#292C34] hover:bg-[#24262c] duration-350 p-4 rounded-md flex justify-between items-center"
      >
        <div class="flex gap-4 font-maven font-medium text-[#C0C4CE]">
          <IconsEmail />
          <span>E-mail</span>
        </div>
        <IconsArrowUpRight />
      </NuxtLink>
    </div>
  </footer>
</template>
