
<script lang="ts" setup>
import { ref } from "vue";

const experiences = ref([
  {
    id: 1,
    icon: "💻",
    title: "Front-End Developer",
    description: "+1 Year of Experience",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    icon: "⚡",
    title: "Vue.js & Nuxt.js Specialist",
    description: "Creating modern and responsive web apps",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 3,
    icon: "👨‍🏫",
    title: "Programming Instructor",
    description: "+2 Years teaching ages 6 to 20",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    icon: "🔧",
    title: "Embedded Systems",
    description: "NTI Diploma – 4 Months Intensive Training",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    icon: "🎨",
    title: "UI/UX Focused",
    description: "Clean UI, interactivity & performance optimization",
    color: "from-indigo-500 to-purple-500"
  },
]);
</script>

<template>
  <div class="experiences">
    <div
      class="experience-card"
      v-for="experience in experiences"
      :key="experience.id"
    >
      <div class="card-gradient" :class="experience.color"></div>
      <div class="card-content">
        <div class="icon-wrapper">
          <span class="icon">{{ experience.icon }}</span>
        </div>
        <h3 class="title">{{ experience.title }}</h3>
        <p class="description">{{ experience.description }}</p>
      </div>
      <div class="card-shine"></div>
    </div>
  </div>
</template>
