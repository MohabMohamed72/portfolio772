<script lang="ts" setup>
import JavascriptIcon from "../Icons/JavascriptIcon.vue";
import NuxtIcon from "../Icons/NuxtIcon.vue";
import ReactIcon from "../Icons/ReactIcon.vue";
import ScssIcon from "../Icons/ScssIcon.vue";
import TypescriptIcon from "../Icons/TypescriptIcon.vue";
import VueIcon from "../Icons/VueIcon.vue";
</script>
<template>
  <div class="home">
    <div class="overlay"></div>
    <div class="home-container container">
      <div class="home-about">
        <div class="home-text">
          <h1 class="title">
            Hi, I'm Mohab <br />
            Build Interactive <br />
            Digital Experince
          </h1>
          <div class="subtitle">
            <p class="about-me">Frontend Developer</p>
            <router-link to="/projects">
              <button>Viwe My Work</button>
            </router-link>
          </div>
        </div>
      </div>

      <div class="home-skills-container">
        <h2 class="skills-title">Interactive Skills</h2>
        <div class="home-skills">
          <div class="skill-icon">
            <NuxtIcon class="icon" />
            <p>Nuxt Js</p>
          </div>
          <div class="skill-icon">
            <VueIcon class="icon" />
            <p>Vue Js</p>
          </div>
          <div class="skill-icon">
            <TypescriptIcon class="icon" />
            <p>TypeScript</p>
          </div>
          <div class="skill-icon">
            <JavascriptIcon class="icon" />
            <p>JavaScript</p>
          </div>
          <div class="skill-icon">
            <ReactIcon class="icon" />
            <p>React</p>
          </div>
          <div class="skill-icon">
            <ScssIcon class="icon" />
            <p>Scss</p>
          </div>
        </div>
      </div>
    </div>

    <div class="image-container">
      <img src="../../assets/images/SayWelcome.png" alt="code" />
    </div>
  </div>
</template>
 
<style scoped>

</style>