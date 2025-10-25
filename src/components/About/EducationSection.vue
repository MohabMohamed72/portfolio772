<script lang="ts" setup>
import { ref } from "vue";

const educations = ref([
  {
    id: 1,
    degree: "Bachelor of Mechanical Engineering",
    university: "Mansoura University",
    duration: "2017 - 2021",
    description:
      "Graduated with strong foundations in mechanics, problem-solving, and analytical skills.",
    icon: "🎓",
    color: "blue",
    gradientFrom: "#3b82f6",
    gradientTo: "#06b6d4"
  },
  {
    id: 2,
    degree: "NTI Embedded Systems Diploma",
    university: "National Telecommunication Institute",
    duration: "4 Months",
    description:
      "Intensive embedded systems training, including microcontrollers, IoT basics, and hardware-software integration.",
    icon: "⚡",
    color: "purple",
    gradientFrom: "#a855f7",
    gradientTo: "#ec4899"
  },
]);
</script>

<template>
  <div class="educations-container">
    <div class="educations-grid">
      <div
        class="education-card"
        v-for="education in educations"
        :key="education.id"
        :style="{
          '--gradient-from': education.gradientFrom,
          '--gradient-to': education.gradientTo
        }"
      >
        <div class="card-header">
          <div class="icon-badge" :class="`badge-${education.color}`">
            <span class="icon">{{ education.icon }}</span>
            <div class="badge-glow"></div>
          </div>
          <div class="timeline-dot"></div>
        </div>
        
        <div class="card-body">
          <div class="degree-section">
            <h3 class="degree">{{ education.degree }}</h3>
            <div class="degree-underline"></div>
          </div>
          
          <div class="institution-info">
            <p class="university">
              <svg class="university-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              </svg>
              {{ education.university }}
            </p>
            <p class="duration">
              <svg class="duration-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              {{ education.duration }}
            </p>
          </div>
          
          <p class="description">{{ education.description }}</p>
        </div>
        
        <div class="card-gradient-border"></div>
        <div class="card-shimmer"></div>
      </div>
    </div>
  </div>
</template> 