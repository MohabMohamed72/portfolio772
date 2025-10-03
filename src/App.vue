<script setup lang="ts">
import Footer from "./components/Layouts/Footer.vue";
import Header from "./components/Layouts/Header.vue";
import Toast from 'primevue/toast';

</script>

<template>
  <div class="pages">
    <Header />
    <router-view />
    <div class="overlay"></div>
  </div>
  <!-- <Footer /> -->
</template>

<style scoped>
/* .pages {
  background-image: url("./assets/images/BlackBg.png");
  position: relative;
  background-size: cover;
} */
/* .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000007c;
}*/
</style> 
