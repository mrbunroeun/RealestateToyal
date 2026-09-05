<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterView } from "vue-router";
import Navbar from "./components/Navigation/Navbar.vue";

const showScrollTop = ref(false);

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="min-h-screen w-full bg-white text-black relative">
    <!-- Navbar Component -->
    <Navbar />

    <!-- The active page will display here -->
    <main class="w-full">
      <RouterView />
    </main>

    <!-- Floating Scroll To Top Button (Bottom Right) -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-90"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-90"
    >
      <button
        v-if="showScrollTop"
        type="button"
        @click="scrollToTop"
        aria-label="Scroll to top"
        class="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-11 h-11 sm:w-12 sm:h-12 bg-black text-white hover:bg-neutral-800 active:scale-95 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-white/20 select-none group"
      >
        <!-- Arrow Up Icon -->
        <svg
          class="w-5 h-5 text-white transition-transform duration-300 group-hover:-translate-y-0.5"
          fill="none"
          stroke="currentColor"
          stroke-width="2.2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </Transition>
  </div>
</template>

