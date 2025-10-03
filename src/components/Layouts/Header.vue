<script setup lang="ts">
</script>
<template>
  <div class="navbar">
    <router-link to="/">
      <div class="logo">
        <p>Mohab Mohamed</p>
      </div>
    </router-link>

    <div class="links">
      <ul>
        <router-link to="/">
          <li>Home</li>
        </router-link>
        <router-link to="/about">
          <li>About</li>
        </router-link>
        <router-link to="/">
          <li>Projects</li>
        </router-link>
        <router-link to="/">
          <li>Contact</li>
        </router-link>
      </ul>
    </div>
  </div>
</template>