<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navigation/Navbar.vue";
</script>

<template>
  <div class="min-h-screen w-full bg-white text-black">
    <!-- Navbar Component -->
    <Navbar />

    <!-- The active page will display here -->
    <main class="w-full">
      <RouterView />
    </main>
  </div>
</template>
