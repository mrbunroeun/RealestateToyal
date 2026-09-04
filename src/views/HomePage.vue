<script setup>
import heroBuilding from '@/assets/house-imag/set-new-standard.png'
import houseTopLeft from '@/assets/house-imag/if-you-can-dream-it.png'
import houseRight from '@/assets/house-imag/we-adapt.png'
import houseBottomLeft from '@/assets/house-imag/second-we-adapt.png'
</script>

<template>
  <div class="w-full flex flex-col items-center pb-28 font-['Inter',sans-serif]">
    
    <!-- 1. Hero Banner Card Section -->
    <section class="w-full flex justify-center pt-20 sm:pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div class="relative w-full max-w-[1240px] h-[360px] md:h-[400px] lg:h-[440px] flex items-center bg-gradient-to-r from-[#97c5f8] via-[#a2b5ca] to-[#ca9c76]">
        
        <!-- Left Content / Typography -->
        <div class="z-10 pl-8 sm:pl-12 lg:pl-16 max-w-[560px] select-none">
          <p class="text-[13px] sm:text-[14px] text-neutral-800 font-medium tracking-wide mb-4">
            Crafting Tomorrow's Living Spaces:
          </p>
          <h1 class="text-3xl sm:text-4xl lg:text-[50px] font-normal leading-[1.12] text-neutral-900 tracking-tight font-['Newsreader',serif]">
            Set New Standards<br />
            in Modern Home<br />
            Construction
          </h1>
        </div>

        <!-- Right Architecture Building Image popping out above the container -->
        <div class="absolute right-0 bottom-0 w-[55%] md:w-[50%] lg:w-[48%] flex items-end justify-end pointer-events-none z-20">
          <img
            :src="heroBuilding"
            alt="Modern Architecture"
            class="h-[430px] md:h-[480px] lg:h-[530px] w-auto max-w-none object-contain object-bottom select-none"
          />
        </div>

      </div>
    </section>

    <!-- 2. "If you can dream it, we can build it." Showcase Section (100% Matching whole-page.png) -->
    <section class="w-full relative my-12">
      
      <!-- Top Row: Left-bleed image + Heading & description on the right -->
      <div class="w-full grid grid-cols-1 lg:grid-cols-12 items-start gap-8 lg:gap-0">
        
        <!-- Top-Left Image: Bleeds to the left edge of screen -->
        <div class="lg:col-span-5 xl:col-span-4 w-full aspect-square overflow-hidden bg-neutral-100">
          <img
            :src="houseTopLeft"
            alt="House design"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Top-Right Text: Heading & Paragraph -->
        <div class="lg:col-span-7 xl:col-span-8 flex flex-col justify-start px-6 sm:px-12 lg:pl-16 lg:pr-20 pt-4 lg:pt-6">
          <div class="max-w-[490px]">
            <h2 class="text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.15] text-neutral-900 tracking-tight font-['Newsreader',serif] mb-5">
              If you can dream it, we<br />can build it.
            </h2>
            <p class="text-[13px] leading-[1.7] text-neutral-600 font-normal">
              We adapt a uniquely personalised perspective to each project to deliver stunning spaces of optimal function. Renowned for our architectural understanding and masterful craftsmanship, our portfolio of residential projects
            </p>
          </div>
        </div>

      </div>

      <!-- Middle & Bottom Staggered Houses (Matching whole-page.png layout) -->
      <div class="w-full max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-8 mt-16 lg:mt-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-28 gap-y-16 items-start">
          
          <!-- Lower-Left House Image + Paragraph (No extra title, exactly like whole-page.png) -->
          <div class="flex flex-col max-w-[430px] md:mt-12 lg:mt-20">
            <div class="w-full aspect-square overflow-hidden bg-neutral-100 mb-5">
              <img
                :src="houseBottomLeft"
                alt="House design"
                class="w-full h-full object-cover"
              />
            </div>
            <p class="text-[13px] leading-[1.7] text-neutral-600 font-normal">
              We adapt a uniquely personalised perspective to each project to deliver stunning spaces of optimal function. Renowned for our architectural understanding and masterful craftsmanship, our portfolio of residential projects
            </p>
          </div>

          <!-- Higher-Right House Image + Paragraph (Bleeds right / sits higher, exactly like whole-page.png) -->
          <div class="flex flex-col max-w-[430px] md:mt-[-120px] lg:mt-[-180px] md:ml-auto">
            <div class="w-full aspect-square overflow-hidden bg-neutral-100 mb-5">
              <img
                :src="houseRight"
                alt="House design"
                class="w-full h-full object-cover"
              />
            </div>
            <p class="text-[13px] leading-[1.7] text-neutral-600 font-normal">
              We adapt a uniquely personalised perspective to each project to deliver stunning spaces of optimal function. Renowned for our architectural understanding and masterful craftsmanship, our portfolio of residential projects
            </p>
          </div>

        </div>
      </div>

    </section>

  </div>
</template>