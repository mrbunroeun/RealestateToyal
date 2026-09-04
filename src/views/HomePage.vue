<script setup>
import { RouterLink } from "vue-router";
import heroBuilding from "@/assets/house-imag/set-new-standard.png";
import houseTopLeft from "@/assets/house-imag/if-you-can-dream-it.png";
import houseRight from "@/assets/house-imag/we-adapt.png";
import houseBottomLeft from "@/assets/house-imag/second-we-adapt.png";
import bigHouseBg from "@/assets/house-imag/bg-img.png";
</script>

<template>
  <div
    class="w-full flex flex-col items-center pb-28 font-['Inter',sans-serif] overflow-x-hidden"
  >
    <!-- 1. Hero Banner Card Section -->
    <section
      class="w-full flex justify-center pt-16 sm:pt-24 md:pt-28 lg:pt-36 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8"
    >
      <!-- Responsive Fluid Banner -->
      <div
        class="relative w-full max-w-[1240px] flex flex-col lg:flex-row items-center justify-between bg-gradient-to-b lg:bg-gradient-to-r from-[#97c5f8] via-[#a2b5ca] to-[#ca9c76] rounded-none sm:rounded-sm overflow-visible lg:h-[440px]"
      >
        <!-- Typography -->
        <div
          class="z-30 w-full lg:w-[54%] px-6 sm:px-10 lg:pl-16 pt-8 pb-4 lg:py-0 shrink-0"
        >
          <p
            class="text-[clamp(11px,1.4vw,14px)] text-neutral-800 font-medium tracking-wide mb-2 sm:mb-4 transition-all duration-300"
          >
            Crafting Tomorrow's Living Spaces:
          </p>
          <h1
            class="text-[clamp(24px,3.8vw,48px)] font-normal leading-[1.14] text-neutral-900 tracking-tight font-['Newsreader',serif] transition-all duration-300"
          >
            Set New Standards<br />
            in Modern Home<br />
            Construction
          </h1>
        </div>

        <!-- Architecture Building Image -->
        <div
          class="w-full lg:w-[46%] relative lg:absolute lg:right-0 lg:bottom-0 flex items-end justify-center lg:justify-end z-20 overflow-visible pt-2 lg:pt-0 pointer-events-none"
        >
          <img
            :src="heroBuilding"
            alt="Modern Architecture"
            class="h-auto max-h-[300px] sm:max-h-[360px] md:max-h-[420px] lg:max-h-none lg:h-[530px] w-auto max-w-[85%] sm:max-w-[70%] lg:max-w-none object-contain object-bottom select-none transition-all duration-300"
          />
        </div>
      </div>
    </section>

    <!-- 2. "If you can dream it, we can build it." Showcase Section -->
    <section class="w-full my-8 sm:my-12">
      <!-- Top Block: Heading & House 1 -->
      <div class="w-full flex flex-col lg:flex-row items-start">
        <!-- Text container -->
        <div
          class="w-full lg:order-2 flex justify-start px-6 sm:px-12 lg:pl-20 pt-2 lg:pt-4 mb-6 lg:mb-0"
        >
          <div class="max-w-[490px]">
            <h2
              class="text-[clamp(24px,3.5vw,44px)] font-normal leading-[1.15] text-neutral-900 tracking-tight font-['Newsreader',serif] mb-4 sm:mb-5 transition-all duration-300"
            >
              If you can dream it, we<br class="hidden sm:inline" />
              can build it.
            </h2>
            <p
              class="text-[clamp(12px,1.3vw,14px)] leading-[1.7] text-neutral-600 font-normal font-['Rufina',serif] transition-all duration-300"
            >
              We adapt a uniquely personalised perspective to each project to
              deliver stunning spaces of optimal function. Renowned for our
              architectural understanding and masterful craftsmanship, our
              portfolio of residential projects
            </p>
          </div>
        </div>

        <!-- House Image 1 -->
        <div
          class="w-full lg:order-1 lg:w-[380px] xl:w-[420px] shrink-0 px-6 sm:px-12 lg:px-0"
        >
          <div
            class="w-full max-w-[420px] mx-auto lg:mx-0 aspect-square overflow-hidden bg-neutral-100"
          >
            <img
              :src="houseTopLeft"
              alt="Luxury modern villa design"
              class="w-full h-full object-cover transition-all duration-300"
            />
          </div>
        </div>
      </div>

      <!-- Middle & Bottom Layout Container -->
      <div class="w-full relative mt-12 sm:mt-16 lg:mt-[-40px]">
        <!-- Right House Image 2 -->
        <div
          class="w-full lg:w-[400px] xl:w-[440px] lg:ml-auto flex flex-col px-6 sm:px-12 lg:px-0 mb-12 sm:mb-16 lg:mb-0"
        >
          <div
            class="w-full max-w-[420px] mx-auto lg:mx-0 aspect-square overflow-hidden bg-neutral-100 mb-4 sm:mb-5"
          >
            <img
              :src="houseRight"
              alt="Evening illuminated architectural house"
              class="w-full h-full object-cover transition-all duration-300"
            />
          </div>
          <p
            class="text-[clamp(12px,1.2vw,13px)] leading-[1.7] text-neutral-600 font-normal font-['Rufina',serif] max-w-[420px] mx-auto lg:mx-0 lg:pr-8 transition-all duration-300"
          >
            We adapt a uniquely personalised perspective to each project to
            deliver stunning spaces of optimal function. Renowned for our
            architectural understanding and masterful craftsmanship, our
            portfolio of residential projects
          </p>
        </div>

        <!-- Lower-Left House Image 3 -->
        <div
          class="w-full max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-28 lg:mt-[-80px]"
        >
          <div class="flex flex-col max-w-[420px] mx-auto lg:mx-0">
            <div
              class="w-full aspect-square overflow-hidden bg-neutral-100 mb-4 sm:mb-5"
            >
              <img
                :src="houseBottomLeft"
                alt="Contemporary multilevel residence"
                class="w-full h-full object-cover transition-all duration-300"
              />
            </div>
            <p
              class="text-[clamp(12px,1.2vw,13px)] leading-[1.7] text-neutral-600 font-normal font-['Rufina',serif] transition-all duration-300"
            >
              We adapt a uniquely personalised perspective to each project to
              deliver stunning spaces of optimal function. Renowned for our
              architectural understanding and masterful craftsmanship, our
              portfolio of residential projects
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Section 3: Big Image on Left + Text on Right (Left-aligned text, as per original layout) -->
    <section class="w-full max-w-[1240px] mt-12 sm:mt-20 md:mt-24 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <!-- Left Image -->
        <div class="lg:col-span-7 w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[420px] overflow-hidden bg-neutral-100 shadow-sm">
          <img
            :src="bigHouseBg"
            alt="Modern House Construction"
            class="w-full h-full object-cover object-center select-none hover:scale-105 transition-transform duration-500"
          />
        </div>

        <!-- Right Text Block (Left-aligned) -->
        <div class="lg:col-span-5 flex flex-col items-start lg:pl-4">
          <p class="text-[12px] sm:text-[13px] text-neutral-600 font-medium tracking-wide mb-3">
            Crafting Tomorrow's Living Spaces:
          </p>
          <h2 class="text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.18] text-neutral-900 tracking-tight font-['Newsreader',serif] mb-6">
            Set New Standards<br />
            in Modern Home<br />
            Construction
          </h2>
          <RouterLink
            to="/inclusion-list"
            class="px-7 py-2.5 bg-black text-white text-[12px] font-medium hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer select-none"
          >
            Inclusion List
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- 4. Section 4: "Inclusion List" Section with 3 Grid Variations (Matching whole-page.png) -->
    <section class="w-full max-w-[1240px] mt-24 sm:mt-32 px-4 sm:px-6 lg:px-8">
      <!-- Section Big Title: "Inclusion List" with clean underline accent -->
      <div class="mb-14 sm:mb-16">
        <h2
          class="text-3xl sm:text-4xl lg:text-[42px] font-normal text-neutral-900 font-['Newsreader',serif] tracking-tight pb-2 border-b border-neutral-300 inline-block"
        >
          Inclusion List
        </h2>
      </div>

      <!-- Item 1: Text on Left + 2 Square Images on Right (Left-aligned) -->
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24 sm:mb-28"
      >
        <!-- Left Text Block -->
        <div class="lg:col-span-4 flex flex-col items-start">
          <p
            class="text-[12px] sm:text-[13px] text-neutral-600 font-medium tracking-wide mb-3"
          >
            Crafting Tomorrow's Living Spaces:
          </p>
          <h3
            class="text-2xl sm:text-3xl lg:text-[34px] font-normal leading-[1.18] text-neutral-900 tracking-tight font-['Newsreader',serif] mb-6"
          >
            Set New Standards<br />
            in Modern Home<br />
            Construction
          </h3>
          <RouterLink
            to="/inclusion-list"
            class="px-6 py-2.5 bg-black text-white text-[12px] font-medium hover:bg-neutral-800 transition-colors cursor-pointer select-none"
          >
            Inclusion List
          </RouterLink>
        </div>

        <!-- Right 2 Images Grid -->
        <div
          class="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
        >
          <div class="w-full aspect-square overflow-hidden bg-neutral-100">
            <img
              :src="houseBottomLeft"
              alt="Modern residence design"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div class="w-full aspect-square overflow-hidden bg-neutral-100">
            <img
              :src="houseRight"
              alt="Evening residence design"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <!-- Item 2: Wide Image on Left + Text on Right (RIGHT-ALIGNED AS REQUESTED) -->
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-24 sm:mb-28"
      >
        <!-- Left Wide Image -->
        <div
          class="lg:col-span-7 w-full h-[260px] sm:h-[320px] md:h-[360px] overflow-hidden bg-neutral-100"
        >
          <img
            :src="bigHouseBg"
            alt="Contemporary villa front"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <!-- Right Text Block: Right-aligned text & right-aligned button -->
        <div class="lg:col-span-5 flex flex-col items-end text-right lg:pl-6">
          <p
            class="text-[12px] sm:text-[13px] text-neutral-600 font-medium tracking-wide mb-3"
          >
            Crafting Tomorrow's Living Spaces:
          </p>
          <h3
            class="text-2xl sm:text-3xl lg:text-[34px] font-normal leading-[1.18] text-neutral-900 tracking-tight font-['Newsreader',serif] mb-6"
          >
            Set New Standards<br />
            in Modern Home<br />
            Construction
          </h3>
          <RouterLink
            to="/inclusion-list"
            class="px-6 py-2.5 bg-black text-white text-[12px] font-medium hover:bg-neutral-800 transition-colors cursor-pointer select-none"
          >
            Inclusion List
          </RouterLink>
        </div>
      </div>

      <!-- Item 3: Text on Left + 2 Layered / Split Images on Right (Left-aligned) -->
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        <!-- Left Text Block -->
        <div class="lg:col-span-4 flex flex-col items-start">
          <p
            class="text-[12px] sm:text-[13px] text-neutral-600 font-medium tracking-wide mb-3"
          >
            Crafting Tomorrow's Living Spaces:
          </p>
          <h3
            class="text-2xl sm:text-3xl lg:text-[34px] font-normal leading-[1.18] text-neutral-900 tracking-tight font-['Newsreader',serif] mb-6"
          >
            Set New Standards<br />
            in Modern Home<br />
            Construction
          </h3>
          <RouterLink
            to="/inclusion-list"
            class="px-6 py-2.5 bg-black text-white text-[12px] font-medium hover:bg-neutral-800 transition-colors cursor-pointer select-none"
          >
            Inclusion List
          </RouterLink>
        </div>

        <!-- Right Asymmetrical Images -->
        <div
          class="lg:col-span-8 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center"
        >
          <div
            class="sm:col-span-7 w-full aspect-square overflow-hidden bg-neutral-100"
          >
            <img
              :src="houseBottomLeft"
              alt="Main modern house"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div
            class="sm:col-span-5 w-full aspect-[4/5] overflow-hidden bg-neutral-100"
          >
            <img
              :src="houseRight"
              alt="Secondary modern house"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
