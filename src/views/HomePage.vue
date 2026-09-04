<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import heroBuilding from "@/assets/house-imag/set-new-standard.png";
import houseTopLeft from "@/assets/house-imag/if-you-can-dream-it.png";
import houseRight from "@/assets/house-imag/we-adapt.png";
import houseBottomLeft from "@/assets/house-imag/second-we-adapt.png";
import bigHouseBg from "@/assets/house-imag/bg-img.png";

// Gallery state for Item 3 (4 images total, dual-image side-by-side with 0 gap)
const galleryImages = [
  {
    src: houseBottomLeft,
    alt: "Modern Multilevel Residence",
    title: "Modern Multilevel Residence",
  },
  {
    src: houseRight,
    alt: "Illuminated Architectural House",
    title: "Illuminated Architectural House",
  },
  {
    src: houseTopLeft,
    alt: "Luxury Villa Front Entrance",
    title: "Luxury Villa Front Entrance",
  },
  {
    src: bigHouseBg,
    alt: "Contemporary Modern Villa",
    title: "Contemporary Modern Villa",
  },
];

// Item 3 State: Dual-image 0-gap presentation with smooth expand & non-looping navigation
const pairIndex = ref(0); // 0 -> images 0 & 1, 1 -> images 2 & 3
const activeSide = ref("left"); // 'left' (big on left) or 'right' (big on right)
const selectedImageIndex = ref(null);

const currentLeftImg = computed(() => galleryImages[pairIndex.value * 2]);
const currentRightImg = computed(() => galleryImages[pairIndex.value * 2 + 1]);

const canGoPrev = computed(() => pairIndex.value > 0 || activeSide.value === "right");
const canGoNext = computed(
  () => pairIndex.value < Math.floor(galleryImages.length / 2) - 1 || activeSide.value === "left"
);

const handleLeftClick = () => {
  if (activeSide.value === "left") {
    openPopup(pairIndex.value * 2);
  } else {
    activeSide.value = "left";
  }
};

const handleRightClick = () => {
  if (activeSide.value === "right") {
    openPopup(pairIndex.value * 2 + 1);
  } else {
    activeSide.value = "right";
  }
};

const goPrev = () => {
  if (activeSide.value === "right") {
    activeSide.value = "left";
  } else if (pairIndex.value > 0) {
    pairIndex.value--;
    activeSide.value = "right";
  }
};

const goNext = () => {
  if (activeSide.value === "left") {
    activeSide.value = "right";
  } else if (pairIndex.value < Math.floor(galleryImages.length / 2) - 1) {
    pairIndex.value++;
    activeSide.value = "left";
  }
};

const openPopup = (index) => {
  selectedImageIndex.value = index;
  document.body.style.overflow = "hidden";
};

const closePopup = () => {
  selectedImageIndex.value = null;
  document.body.style.overflow = "";
};

const prevImage = () => {
  if (selectedImageIndex.value !== null && selectedImageIndex.value > 0) {
    selectedImageIndex.value--;
  }
};

const nextImage = () => {
  if (
    selectedImageIndex.value !== null &&
    selectedImageIndex.value < galleryImages.length - 1
  ) {
    selectedImageIndex.value++;
  }
};

const handleKeyDown = (e) => {
  if (selectedImageIndex.value === null) return;
  if (e.key === "Escape") closePopup();
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "ArrowRight") nextImage();
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
  document.body.style.overflow = "";
});
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
        class="relative w-full max-w-[1240px] flex flex-col lg:flex-row items-center justify-between bg-gradient-to-b lg:bg-gradient-to-r from-[#97c5f8] via-[#a2b5ca] to-[#ca9c76] rounded-none overflow-visible lg:h-[440px]"
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

    <!-- 3. Section 3: Full-width Image Banner with Text Overlay (Original design from whole-page.png) -->
    <section class="w-full max-w-[1240px] mt-16 sm:mt-24 px-4 sm:px-6 lg:px-8">
      <div
        class="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] overflow-hidden rounded-none shadow-md flex items-center"
      >
        <!-- Background Image -->
        <img
          :src="bigHouseBg"
          alt="Modern House Construction"
          class="absolute inset-0 w-full h-full object-cover object-center select-none"
        />
        <!-- Subtle dark gradient overlay for text readability -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"
        ></div>

        <!-- Overlay Text Block -->
        <div
          class="relative z-10 px-6 sm:px-12 lg:px-16 max-w-[550px] flex flex-col items-start"
        >
          <p
            class="text-[12px] sm:text-[13px] text-white/90 font-medium tracking-wide mb-3"
          >
            Crafting Tomorrow's Living Spaces:
          </p>
          <h2
            class="text-3xl sm:text-4xl lg:text-[46px] font-normal leading-[1.15] text-white tracking-tight font-['Newsreader',serif] mb-6 sm:mb-8"
          >
            Set New Standards<br />
            in Modern Home<br />
            Construction
          </h2>
          <RouterLink
            to="/inclusion-list"
            class="px-8 py-3 bg-white text-neutral-950 text-[12px] sm:text-[13px] font-medium hover:bg-neutral-100 transition-colors shadow-sm cursor-pointer select-none inline-block rounded-none"
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

      <!-- Item 1: Text on Left + 2 Square Images on Right (Original from whole-page.png) -->
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
            class="px-6 py-2.5 bg-black text-white text-[12px] font-medium hover:bg-neutral-800 transition-colors cursor-pointer select-none rounded-none"
          >
            Inclusion List
          </RouterLink>
        </div>

        <!-- Right 2 Images Grid -->
        <div
          class="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
        >
          <div
            class="w-full aspect-square overflow-hidden bg-neutral-100 rounded-none"
          >
            <img
              :src="houseBottomLeft"
              alt="Modern residence design"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-none"
            />
          </div>
          <div
            class="w-full aspect-square overflow-hidden bg-neutral-100 rounded-none"
          >
            <img
              :src="houseRight"
              alt="Evening residence design"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-none"
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
          class="lg:col-span-7 w-full h-[260px] sm:h-[320px] md:h-[360px] overflow-hidden bg-neutral-100 rounded-none"
        >
          <img
            :src="bigHouseBg"
            alt="Contemporary villa front"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-none"
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
            class="px-6 py-2.5 bg-black text-white text-[12px] font-medium hover:bg-neutral-800 transition-colors cursor-pointer select-none rounded-none"
          >
            Inclusion List
          </RouterLink>
        </div>
      </div>

      <!-- Item 3: Dual-Image 0-Gap Presentation (Smooth Scale Left Big / Right Big, items-start text lock, click to expand) -->
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
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
            class="px-6 py-2.5 bg-black text-white text-[12px] font-medium hover:bg-neutral-800 transition-colors cursor-pointer select-none rounded-none"
          >
            Inclusion List
          </RouterLink>

          <!-- Gallery Navigation Scroll Controls -->
          <div class="flex items-center gap-3 mt-6">
            <button
              @click="goPrev"
              :disabled="!canGoPrev"
              aria-label="Previous image"
              :class="[
                'w-9 h-9 border flex items-center justify-center transition-all select-none rounded-none',
                canGoPrev
                  ? 'border-neutral-300 hover:border-black text-neutral-800 hover:bg-neutral-100 cursor-pointer active:scale-95'
                  : 'border-neutral-200 text-neutral-300 cursor-not-allowed opacity-40',
              ]"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              @click="goNext"
              :disabled="!canGoNext"
              aria-label="Next image"
              :class="[
                'w-9 h-9 border flex items-center justify-center transition-all select-none rounded-none',
                canGoNext
                  ? 'border-neutral-300 hover:border-black text-neutral-800 hover:bg-neutral-100 cursor-pointer active:scale-95'
                  : 'border-neutral-200 text-neutral-300 cursor-not-allowed opacity-40',
              ]"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <span class="text-xs text-neutral-600 font-medium pl-1 select-none">
              Pair {{ pairIndex + 1 }} of {{ Math.ceil(galleryImages.length / 2) }}
            </span>
          </div>
        </div>

        <!-- Right 2 Visible Images (Side-by-Side with 0 Gap & Smooth Scale) -->
        <div
          class="lg:col-span-8 w-full flex items-center justify-start gap-0 select-none overflow-hidden"
        >
          <!-- Left Image Slot -->
          <div
            @click="handleLeftClick"
            :class="[
              'group relative shrink-0 aspect-square overflow-hidden bg-neutral-100 cursor-pointer transition-all duration-500 ease-in-out select-none rounded-none',
              activeSide === 'left'
                ? 'w-[68%] z-10 shadow-sm'
                : 'w-[32%] z-0 brightness-95 hover:brightness-100',
            ]"
          >
            <img
              :src="currentLeftImg?.src"
              :alt="currentLeftImg?.alt"
              class="w-full h-full object-cover select-none rounded-none"
            />

            <!-- Active Expand Hint on Click -->
            <div
              v-if="activeSide === 'left'"
              class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white rounded-none"
            >
              <div
                class="w-10 h-10 bg-black/70 backdrop-blur-sm flex items-center justify-center mb-2 rounded-none"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </div>
              <span class="text-[12px] font-medium tracking-wide">Click to expand</span>
            </div>
          </div>

          <!-- Right Image Slot -->
          <div
            @click="handleRightClick"
            :class="[
              'group relative shrink-0 aspect-square overflow-hidden bg-neutral-100 cursor-pointer transition-all duration-500 ease-in-out select-none rounded-none border-l-0',
              activeSide === 'right'
                ? 'w-[68%] z-10 shadow-sm'
                : 'w-[32%] z-0 brightness-95 hover:brightness-100',
            ]"
          >
            <img
              :src="currentRightImg?.src"
              :alt="currentRightImg?.alt"
              class="w-full h-full object-cover select-none rounded-none"
            />

            <!-- Active Expand Hint on Click -->
            <div
              v-if="activeSide === 'right'"
              class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white rounded-none"
            >
              <div
                class="w-10 h-10 bg-black/70 backdrop-blur-sm flex items-center justify-center mb-2 rounded-none"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </div>
              <span class="text-[12px] font-medium tracking-wide">Click to expand</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Full Screen Lightbox Modal Popup (100% No Rounded, Non-looping buttons) -->
    <Teleport to="body">
      <Transition name="lightbox-fade">
        <div
          v-if="selectedImageIndex !== null"
          class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 select-none rounded-none"
          @click.self="closePopup"
        >
          <!-- Top Bar: Counter & Close Button -->
          <div
            class="absolute top-5 left-6 text-white/80 text-sm font-medium tracking-wide"
          >
            {{ selectedImageIndex + 1 }} / {{ galleryImages.length }}
          </div>
          <button
            @click="closePopup"
            aria-label="Close image popup"
            class="absolute top-5 right-6 text-white/80 hover:text-white p-2.5 hover:bg-white/10 transition-colors cursor-pointer z-20 rounded-none"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Prev Navigation Button (Non-looping) -->
          <button
            @click.stop="prevImage"
            :disabled="selectedImageIndex === 0"
            aria-label="Previous image"
            :class="[
              'absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 transition-all z-20 rounded-none',
              selectedImageIndex > 0
                ? 'text-white/90 bg-black/60 hover:bg-black/80 backdrop-blur-sm cursor-pointer active:scale-95'
                : 'text-white/30 bg-black/30 cursor-not-allowed opacity-40',
            ]"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <!-- Next Navigation Button (Non-looping) -->
          <button
            @click.stop="nextImage"
            :disabled="selectedImageIndex === galleryImages.length - 1"
            aria-label="Next image"
            :class="[
              'absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 transition-all z-20 rounded-none',
              selectedImageIndex < galleryImages.length - 1
                ? 'text-white/90 bg-black/60 hover:bg-black/80 backdrop-blur-sm cursor-pointer active:scale-95'
                : 'text-white/30 bg-black/30 cursor-not-allowed opacity-40',
            ]"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <!-- Image & Caption Container -->
          <div
            class="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center p-2 rounded-none"
            @click.stop
          >
            <img
              :src="galleryImages[selectedImageIndex]?.src"
              :alt="galleryImages[selectedImageIndex]?.alt"
              class="max-w-full max-h-[75vh] object-contain shadow-2xl select-none rounded-none"
            />
            <p
              class="mt-4 text-white/90 text-sm sm:text-base font-medium text-center"
            >
              {{ galleryImages[selectedImageIndex]?.title }}
            </p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.25s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}
</style>
