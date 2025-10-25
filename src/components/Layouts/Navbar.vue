<script setup lang="ts">
</script>


<template>
  <div class="navbar-container">
    <p class="title">Mohab Mohamed</p>
    <ul>
      <router-link to="/">
        <li>Home</li>
      </router-link>
      <router-link to="/about">
        <li>About Me</li>
      </router-link>
      <router-link to="/projects">
        <li>Projects</li>
      </router-link>
      <router-link to="/">
        <li>Contact Me</li>
      </router-link>
    </ul>

    <div class="mobile-nav"></div>
  </div>
</template>

