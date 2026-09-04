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

const currentFocusedPhotoNumber = computed(() => {
  return pairIndex.value * 2 + (activeSide.value === "left" ? 1 : 2);
});

const canGoPrev = computed(
  () => pairIndex.value > 0 || activeSide.value === "right",
);
const canGoNext = computed(
  () =>
    pairIndex.value < Math.floor(galleryImages.length / 2) - 1 ||
    activeSide.value === "left",
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

        <!-- Lower-Left House Image 3 (Aligned with Section 3 container left edge) -->
        <div
          class="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 lg:mt-[-80px]"
        >
          <div
            class="flex flex-col w-full max-w-[420px] lg:w-[380px] xl:w-[420px]"
          >
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
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
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
              Photo {{ currentFocusedPhotoNumber }} of
              {{ galleryImages.length }}
            </span>
          </div>
        </div>

        <!-- Right 2 Visible Images Container (Outer wrapper preserves fixed origin aspect ratio, preventing height changes) -->
        <div
          class="lg:col-span-8 relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/10] overflow-hidden select-none"
        >
          <div
            class="absolute inset-0 w-full h-full flex items-center justify-start gap-0 select-none overflow-hidden"
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
                <span class="text-[12px] font-medium tracking-wide"
                  >Click to expand</span
                >
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
                <span class="text-[12px] font-medium tracking-wide"
                  >Click to expand</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Section 5: "About Us" Banner (Matching whole-page.png) -->
    <section
      id="about"
      class="w-full max-w-[1240px] mt-24 sm:mt-32 px-4 sm:px-6 lg:px-8"
    >
      <!-- Section Big Title: "About Us" with clean underline accent -->
      <div class="mb-14 sm:mb-16">
        <h2
          class="text-3xl sm:text-4xl lg:text-[42px] font-normal text-neutral-900 font-['Newsreader',serif] tracking-tight pb-2 border-b border-neutral-300 inline-block"
        >
          About Us
        </h2>
      </div>

      <!-- Banner Card with Overlaid Heading & CTA -->
      <div
        class="relative w-full h-[360px] sm:h-[440px] lg:h-[500px] overflow-hidden rounded-none shadow-md flex items-center"
      >
        <img
          :src="bigHouseBg"
          alt="About Us Villa"
          class="absolute inset-0 w-full h-full object-cover object-center select-none"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent"
        ></div>

        <!-- Overlaid Content -->
        <div
          class="relative z-10 px-6 sm:px-12 lg:px-16 max-w-[700px] flex flex-col items-start"
        >
          <p
            class="text-[12px] sm:text-[13px] text-white/90 font-medium tracking-wide mb-3"
          >
            Crafting Tomorrow's Living Spaces:
          </p>
          <h2
            class="text-2xl sm:text-3xl lg:text-[38px] font-normal leading-[1.2] text-white tracking-tight font-['Newsreader',serif] mb-6 sm:mb-8"
          >
            Set New Standards in Modern Home Construction Set New Standards in
            Modern Home Construction Set New Standards in Modern Home
            Construction
          </h2>
          <RouterLink
            to="/contact"
            class="px-7 py-2.5 bg-white text-neutral-950 text-[12px] sm:text-[13px] font-medium hover:bg-neutral-100 transition-colors shadow-sm cursor-pointer select-none inline-block rounded-none"
          >
            Get In touch
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- 6. Section 6: "Ideas Turn Into Reality" (Matching whole-page.png layout) -->
    <section class="w-full max-w-[1240px] mt-24 sm:mt-32 px-4 sm:px-6 lg:px-8">
      <!-- Title -->
      <div class="mb-12 sm:mb-14">
        <h2
          class="text-3xl sm:text-4xl lg:text-[42px] font-normal text-neutral-900 font-['Newsreader',serif] tracking-tight pb-2 border-b border-neutral-300 inline-block"
        >
          Ideas Turn Into Reality
        </h2>
      </div>

      <!-- Asymmetrical 3-Column Image Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        <!-- Left Column: 2 Stacked Square Photos -->
        <div class="lg:col-span-4 flex flex-col gap-6 sm:gap-8">
          <div
            class="w-full aspect-square overflow-hidden bg-neutral-100 rounded-none"
          >
            <img
              :src="houseBottomLeft"
              alt="Modern Multilevel Residence"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-none"
            />
          </div>
          <div
            class="w-full aspect-square overflow-hidden bg-neutral-100 rounded-none"
          >
            <img
              :src="houseTopLeft"
              alt="Luxury modern villa design"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-none"
            />
          </div>
        </div>

        <!-- Center Column: Tall Hero Image with Description below -->
        <div class="lg:col-span-5 flex flex-col">
          <div
            class="w-full aspect-[4/5] overflow-hidden bg-neutral-100 mb-5 rounded-none"
          >
            <img
              :src="houseRight"
              alt="Illuminated Architectural House"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-none"
            />
          </div>
          <p
            class="text-[clamp(12px,1.2vw,13px)] leading-[1.7] text-neutral-600 font-normal font-['Rufina',serif]"
          >
            We adapt a uniquely personalised perspective to each project to
            deliver stunning spaces of optimal function. Renowned for our
            architectural understanding and masterful craftsmanship, our
            portfolio of residential projects
          </p>
        </div>

        <!-- Right Column: Single Smaller Square Photo -->
        <div class="lg:col-span-3 flex flex-col">
          <div
            class="w-full aspect-square overflow-hidden bg-neutral-100 rounded-none"
          >
            <img
              :src="houseBottomLeft"
              alt="Contemporary multilevel residence"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-none"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Section 7: "Get in touch" Form (Matching whole-page.png) -->
    <section
      id="contact"
      class="w-full max-w-[1240px] mt-24 sm:mt-32 px-4 sm:px-6 lg:px-8"
    >
      <!-- Title -->
      <div class="mb-10 sm:mb-12">
        <h2
          class="text-3xl sm:text-4xl lg:text-[42px] font-normal text-neutral-900 font-['Newsreader',serif] tracking-tight pb-2 border-b border-neutral-300 inline-block"
        >
          Get in touch
        </h2>
      </div>

      <!-- Form Inputs Grid -->
      <form @submit.prevent class="w-full flex flex-col gap-6 max-w-[1100px]">
        <!-- Row 1: Email & User Name -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="email"
            placeholder="Email..."
            class="w-full px-4 py-3 border border-neutral-400 bg-white text-neutral-800 text-sm focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-neutral-500"
          />
          <input
            type="text"
            placeholder="User Name..."
            class="w-full px-4 py-3 border border-neutral-400 bg-white text-neutral-800 text-sm focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-neutral-500"
          />
        </div>

        <!-- Row 2: Phone Number & Location -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="tel"
            placeholder="Phone Number..."
            class="w-full px-4 py-3 border border-neutral-400 bg-white text-neutral-800 text-sm focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-neutral-500"
          />
          <input
            type="text"
            placeholder="Location..."
            class="w-full px-4 py-3 border border-neutral-400 bg-white text-neutral-800 text-sm focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-neutral-500"
          />
        </div>

        <!-- Submit Button -->
        <div class="pt-2">
          <button
            type="submit"
            class="px-8 py-3 bg-black text-white text-[12px] sm:text-[13px] font-medium hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer select-none rounded-none"
          >
            Inclusion List
          </button>
        </div>
      </form>
    </section>

    <!-- 8. Section 8: Footer (Matching whole-page.png) -->
    <footer
      class="relative w-full mt-24 sm:mt-32 overflow-hidden bg-neutral-950 text-white min-h-[420px] flex items-center justify-center rounded-none"
    >
      <!-- Background House with Dark Dim Overlay -->
      <img
        :src="bigHouseBg"
        alt="Footer Modern Villa"
        class="absolute inset-0 w-full h-full object-cover object-center opacity-40 select-none"
      />
      <div class="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      <!-- Footer Content Container -->
      <div
        class="relative z-10 w-full max-w-[1240px] px-6 sm:px-10 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start"
      >
        <!-- Column 1: Brand Logo & Social Icons -->
        <div class="md:col-span-5 flex flex-col items-start">
          <h2
            class="text-3xl sm:text-4xl font-normal tracking-tight font-['Bodoni_Moda',serif] italic mb-8"
          >
            RealestateToyal
          </h2>
          <!-- Social Icons -->
          <div class="flex items-center gap-4">
            <!-- LinkedIn -->
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z"
                />
              </svg>
            </a>
            <!-- Telegram -->
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              class="w-8 h-8 rounded-full bg-[#2AABEE] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Column 2: Navigation Links -->
        <div class="md:col-span-3 flex flex-col items-start">
          <h3
            class="text-xl sm:text-2xl font-normal tracking-tight font-['Newsreader',serif] mb-4 text-white"
          >
            Navigation
          </h3>
          <ul
            class="flex flex-col gap-2.5 text-sm text-neutral-300 font-['Inter',sans-serif]"
          >
            <li>
              <RouterLink to="/" class="hover:text-white transition-colors">
                House Design
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/inclusion-list"
                class="hover:text-white transition-colors"
              >
                Inclusion List
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/about"
                class="hover:text-white transition-colors"
              >
                About
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/contact"
                class="hover:text-white transition-colors"
              >
                Get in touch
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Newsletter Signup -->
        <div class="md:col-span-4 flex flex-col items-start">
          <h3
            class="text-xl sm:text-2xl font-normal tracking-tight font-['Newsreader',serif] mb-3 text-white"
          >
            Newsletter Signup
          </h3>
          <p
            class="text-xs text-neutral-400 mb-4 leading-relaxed font-['Inter',sans-serif]"
          >
            Sign up for email address to solo matlins.and nowe more.
          </p>
          <!-- Email Input + Subscribe Button inline -->
          <form
            @submit.prevent
            class="w-full flex items-center bg-black/60 border border-neutral-600 rounded-none overflow-hidden"
          >
            <input
              type="email"
              placeholder="Email..."
              class="w-full bg-transparent px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none rounded-none"
            />
            <button
              type="submit"
              class="px-5 py-2.5 bg-neutral-200 text-neutral-900 text-xs font-medium hover:bg-white transition-colors cursor-pointer shrink-0 rounded-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
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
