<script setup lang="ts">
import { computed, watch } from "vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const activeIndex = ref(0);

// Computed navItems to respond to locale change
const navItems = computed(() => [
  { path: `/`, label: "home" },
  { path: `/about`, label: "About" },
  { path: `/projects`, label: "Projects", baseRoute: false },
  // { path: `/`, label: "", baseRoute: true },
  { path: `/contact`, label: "Contact", baseRoute: true },
]);

const svgPaths = [
  // 0 - Home
  "M252.92 12.42c7.38-7.38 19.22-7.38 26.6 0l176 176c7.38 7.38 7.38 19.22 0 26.6-.9.9-1.9 1.65-2.94 2.25L464 217.67V456c0 13.25-10.75 24-24 24H328c-13.25 0-24-10.75-24-24V344c0-13.25-10.75-24-24-24h-64c-13.25 0-24 10.75-24 24v112c0 13.25-10.75 24-24 24H72c-13.25 0-24-10.75-24-24V217.67l-11.58-11.58c-7.38-7.38-7.38-19.22 0-26.6l176-176zM288 64l-160 160h320L288 64z",

  // 1 - About (User / Person)
  "M256 0c70.69 0 128 57.31 128 128 0 70.69-57.31 128-128 128-70.69 0-128-57.31-128-128C128 57.31 185.31 0 256 0zm0 224c52.93 0 96-43.07 96-96s-43.07-96-96-96-96 43.07-96 96 43.07 96 96 96zm0 64c-85.88 0-160 48.6-160 112v32h320v-32c0-63.4-74.12-112-160-112z",

  // 2 - Projects (Folder / Briefcase)
  "M464 64H160c-35.35 0-64 28.65-64 64v256c0 35.35 28.65 64 64 64h304c35.35 0 64-28.65 64-64V128c0-35.35-28.65-64-64-64zM160 96h304c17.67 0 32 14.33 32 32v32H128V128c0-17.67 14.33-32 32-32zm0 64h368v224c0 17.67-14.33 32-32 32H160c-17.67 0-32-14.33-32-32V160zM208 256h160c8.84 0 16-7.16 16-16s-7.16-16-16-16H208c-8.84 0-16 7.16-16 16s7.16 16 16 16zm0 64h128c8.84 0 16-7.16 16-16s-7.16-16-16-16H208c-8.84 0-16 7.16-16 16s7.16 16 16 16z",

  // 3 - Contact (Mail / Envelope)
  "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.8l-192 115.2L80 152.8V112h384zm0 323.2H48c-3.31 0-6-2.69-6-6V198.4l182.4 109.44c3.91 2.34 8.73 2.34 12.64 0L464 198.4V422.4c0 3.31-2.69 6-6 6z",
];

// Detect active index
watch(
  () => route.path,
  (newPath: any) => {
    activeIndex.value = navItems.value.findIndex((item) => {
      if (item.path === newPath) return true;
      if (item.baseRoute && newPath.startsWith(item.path + "/")) return true;
      return false;
    });
  },
  { immediate: true }
);

// Responsive SVG viewBox
const iconViewBox = computed(
  () => (index: number) => index === 3 ? "0 0 512 512" : "0 0 576 512"
);

// RTL detection
</script>

<template>
  <div class="navigation">
    <ul>
      <li
        v-for="(item, index) in navItems"
        :key="index"
        :class="['list', { active: activeIndex === index }]"
      >
        <router-link :to="item.path" :aria-label="item.label">
          <span class="icon">
            <svg
              width="22"
              height="22"
              xmlns="http://www.w3.org/2000/svg"
              :viewBox="iconViewBox(index)"
              style="display: block"
              v-if="item.label !== 'services'"
            >
              <path :d="svgPaths[index]" />
            </svg>
            <IconsServices v-else />
          </span>
          <span class="text">{{ item.label }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>