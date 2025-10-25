<script setup lang="ts">
import { ref, onMounted } from "vue";

const isLoaded = ref(false);

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});


</script>

<template>
  <div class="home-container" :class="{ loaded: isLoaded }">
    <!-- Animated background elements -->
    <div class="bg-orb orb-1"></div>
    <div class="bg-orb orb-2"></div>
    <div class="bg-orb orb-3"></div>
    <div class="bg-grid"></div>

    <!-- Main content -->
    <div class="hero-content">
      <!-- Profile image section -->
      <div class="profile-section">
        <div class="image-wrapper">
          <div class="image-ring ring-1"></div>
          <div class="image-ring ring-2"></div>
          <div class="image-ring ring-3"></div>
          <div class="my-image">
            <img
              src="../../assets/images/Mohab.jpg"
              alt="Mohab Mohamed - Front-End Developer"
            />
            <div class="image-glow"></div>
          </div>
          <!-- <div class="status-indicator">
            <span class="status-dot"></span>
            <span class="status-text">Available for work</span>
          </div> -->
        </div>
      </div>

      <!-- Text content -->
      <div class="text-content">
        <div class="greeting">
          <span class="wave">👋</span>
          <span class="greeting-text">Hi, I'm</span>
        </div>

        <h1 class="name">
          <span class="name-highlight">Mohab</span> Mohamed
          <svg class="name-underline" viewBox="0 0 200 12" fill="none">
            <path
              d="M0 6 Q50 0, 100 6 T200 6"
              stroke="#D2C1B6"
              stroke-width="2"
              fill="none"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style="stop-color: #3b82f6; stop-opacity: 1"
                />
                <stop
                  offset="100%"
                  style="stop-color: #06b6d4; stop-opacity: 1"
                />
              </linearGradient>
            </defs>
          </svg>
        </h1>

        <!-- <div class="role-badge">
          <span class="role-icon">💻</span>
          <h2 class="role-title">Front-End Developer</h2>
        </div> -->

        <p class="bio">
          I specialize in building
          <span class="strong">fast, modern, and interactive</span> web applications using
          <span class="tech-highlight">Vue.js</span> and
          <span class="tech-highlight">Nuxt 3</span>. Passionate about turning
          complex ideas into smooth, user-friendly interfaces with a focus on
          <span class="emphasis">performance</span>,
          <span class="emphasis">responsiveness</span>, and
          <span class="emphasis">clean code</span>.
        </p>

        <!-- Skills badges -->
        <div class="skills-preview">
          <div
            class="skill-badge"
            v-for="(skill, index) in [
              'Vue.js',
              'Nuxt 3',
              'TypeScript',
              'UI/UX',
            ]"
            :key="skill"
            :style="{ '--delay': index * 0.1 + 's' }"
          >
            {{ skill }}
          </div>
        </div>

        <!-- CTA buttons -->
        <div class="cta-section">
          <router-link to="/projects" class="cta-primary">
            <span class="cta-text">View My Work</span>
            <svg
              class="cta-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span class="cta-glow"></span>
          </router-link>

          <!-- <a href="#contact" class="cta-secondary">
            <span class="cta-text">Get In Touch</span>
            <svg
              class="cta-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              />
            </svg>
          </a> -->
        </div>
      </div>
    </div>
  </div>
</template>