<script lang="ts" setup>
import { ref } from "vue";
import VueIcon from "../Icons/VueIcon.vue";
import NuxtIcon from "../Icons/NuxtIcon.vue";
import ReactIcon from "../Icons/ReactIcon.vue";
import ReduxIcon from "../Icons/ReduxIcon.vue";
import CIcon from "../Icons/CIcon.vue";
import HtmlIcon from "../Icons/HtmlIcon.vue";
import CssIcon from "../Icons/CssIcon.vue";
import JsIcon from "../Icons/JsIcon.vue";
import ScssIcon from "../Icons/ScssIcon.vue";
import TsIcon from "../Icons/TsIcon.vue";
import GitIcon from "../Icons/GitIcon.vue";
import GithubIcon from "../Icons/GithubIcon.vue";
import TailwindIcon from "../Icons/TailwindIcon.vue";
import PythonIcon from "../Icons/PythonIcon.vue";
import TeachingIcon from "../Icons/TeachingIcon.vue";

const skills = ref([
  { 
    skill: "Vue.js", 
    icon: VueIcon,
    category: "framework",
    color: "emerald"
  },
  { 
    skill: "Nuxt.js", 
    icon: NuxtIcon,
    category: "framework",
    color: "emerald"
  },
  { 
    skill: "React.js", 
    icon: ReactIcon,
    category: "framework",
    color: "blue"
  },
  { 
    skill: "Redux", 
    icon: ReduxIcon,
    category: "framework",
    color: "purple"
  },
  { 
    skill: "C", 
    icon: CIcon,
    category: "language",
    color: "indigo"
  },
  { 
    skill: "HTML5", 
    icon: HtmlIcon,
    category: "language",
    color: "orange"
  },
  { 
    skill: "CSS3", 
    icon: CssIcon,
    category: "language",
    color: "blue"
  },
  { 
    skill: "JavaScript", 
    icon: JsIcon,
    category: "language",
    color: "yellow"
  },
  { 
    skill: "SCSS", 
    icon: ScssIcon,
    category: "language",
    color: "pink"
  },
  { 
    skill: "TypeScript", 
    icon: TsIcon,
    category: "language",
    color: "blue"
  },
  { 
    skill: "Git", 
    icon: GitIcon,
    category: "tool",
    color: "red"
  },
  { 
    skill: "GitHub", 
    icon: GithubIcon,
    category: "tool",
    color: "gray"
  },
  { 
    skill: "Tailwind", 
    icon: TailwindIcon,
    category: "framework",
    color: "cyan"
  },
  { 
    skill: "Python", 
    icon: PythonIcon,
    category: "language",
    color: "blue"
  },
  { 
    skill: "Teaching", 
    icon: TeachingIcon,
    category: "soft-skill",
    color: "violet"
  },
]);
</script>

<template>
  <div class="skills-container">
    <div class="skills-grid">
      <div
        class="skill-card"
        v-for="(skill, index) in skills"
        :key="index"
        :data-category="skill.category"
      >
        <div class="skill-inner">
          <div class="icon-wrapper" :class="`color-${skill.color}`">
            <component
              v-if="skill.icon"
              :is="skill.icon"
              class="skill-icon"
            />
            <div class="icon-glow" :class="`glow-${skill.color}`"></div>
          </div>
          <p class="skill-title">{{ skill.skill }}</p>
          <div class="skill-shimmer"></div>
        </div>
      </div>
    </div>
  </div>
</template>