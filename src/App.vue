<script setup lang="ts">
import Navbar from "./components/Layouts/Navbar.vue";
import ResponsiveNav from "./components/Layouts/ResponsiveNav.vue";
</script>

<template>
  <Navbar />
  <router-view></router-view>
  <ResponsiveNav />
</template>