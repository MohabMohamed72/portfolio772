<script setup lang="ts">
import { ref, computed } from 'vue';
import wordSlice from "../../base/utils/wordSlice/WordSlice";
import type { ProjectInterface } from "../../types/projectsInterface";
import LinkIcon from "../Icons/LinkIcon.vue";

const props = defineProps<{
  cardItem: ProjectInterface;
}>();

const isHovered = ref(false);

// Generate a random gradient based on the project title
const gradientColor = computed(() => {
  const colors = [
    { from: '#3b82f6', to: '#06b6d4', name: 'blue' },
    { from: '#10b981', to: '#14b8a6', name: 'emerald' },
    { from: '#a855f7', to: '#ec4899', name: 'purple' },
    { from: '#f97316', to: '#ef4444', name: 'orange' },
    { from: '#6366f1', to: '#a855f7', name: 'indigo' }
  ];
  const index = props.cardItem.title.length % colors.length;
  return colors[index];
});
</script>

<template>
  <div 
    class="project-card"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    :style="{
      '--gradient-from': gradientColor.from,
      '--gradient-to': gradientColor.to
    }"
  >
    <!-- Animated gradient border -->
    <div class="card-border-gradient"></div>
    
    <!-- Card image with overlay -->
    <div class="card-image-wrapper">
      <div class="card-image">
        <img :src="cardItem.img" alt="project preview" loading="lazy" />
        <div class="image-overlay">
          <div class="overlay-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Floating status badge -->
      <div class="status-badge">
        <span class="status-dot"></span>
        <span class="status-text">Live Project</span>
      </div>
    </div>

    <!-- Card content -->
    <div class="card-content">
      <div class="card-header">
        <h3 class="card-title">
          {{ cardItem.title }}
          <span class="title-shine"></span>
        </h3>
      </div>

      <p class="card-description">
        {{ wordSlice(cardItem.description) }}
      </p>

      <!-- Tech stack tags -->
      <div class="tech-stack">
        <div 
          class="tech-tag"
          v-for="(lang, index) in cardItem.langs" 
          :key="index"
          :style="{ '--tag-index': index }"
        >
          <span class="tech-dot"></span>
          <span class="tech-name">{{ lang }}</span>
        </div>
      </div>
    </div>

    <!-- Card footer with action -->
    <div class="card-footer">
      <a 
        :href="cardItem.ProjectLink" 
        target="_blank"
        rel="noopener noreferrer"
        class="project-link"
      >
        <span class="link-text">View Project</span>
        <span class="link-icon-wrapper">
          <LinkIcon class="link-icon" />
        </span>
        <span class="link-arrow">→</span>
      </a>
    </div>

    <!-- Hover shimmer effect -->
    <div class="card-shimmer" :class="{ active: isHovered }"></div>
  </div>
</template>