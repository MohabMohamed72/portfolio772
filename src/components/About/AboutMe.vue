<script setup lang="ts">
import SpeedDial from "primevue/speeddial";
import { ref } from "vue";
import Dialog from "primevue/dialog";
import RightIcon from "../Icons/RightIcon.vue";
import VueIcon from "../Icons/VueIcon.vue";
import NuxtIcon from "../Icons/NuxtIcon.vue";
import TypescriptIcon from "../Icons/TypescriptIcon.vue";
import JavascriptIcon from "../Icons/JavascriptIcon.vue";
import ReactIcon from "../Icons/ReactIcon.vue";
import ScssIcon from "../Icons/ScssIcon.vue";

const visible = ref(false);
const expvisible = ref(false);
const skillsvisible = ref(false);

const items = ref([
  {
    label: "Education",
    icon: "pi pi-graduation-cap",
    command: () => {
      visible.value = true;
    },
  },
  {
    label: "Experince",
    icon: "pi pi-id-card",
    command: () => {
      expvisible.value = true;
    },
},
{
    label: "Skills",
    icon: "pi pi-list",
    command: () => {
      skillsvisible.value = true;
    },
  },
]);
</script>
<template>
  <div>
    <div class="aboutme container">
      <h2 class="title">
        I am always eager to learn and stay updated with the latest <br />
        trends in front-end development.
      </h2>

      <div class="categories">
        <SpeedDial
          :showIcon="`pi pi-address-book`"
          :model="items"
          :radius="80"
          type="semi-circle"
          direction="up"
          style="position: absolute; left: calc(50% - 2rem); top: 30%"
        />
      </div>
    </div>
    <div class="education">
      <Dialog
        v-model:visible="visible"
        modal
        :closeOnEscape="true"
        :header="`Education`"
        :dismissable-mask="true"
        :style="{ width: '25rem' }"
      >
        <div class="education">
          Graduated from the Faculty of Engineering of the Mechatronics
          Department
        </div>
      </Dialog>
    </div>
    <div class="experince">
      <Dialog
        v-model:visible="expvisible"
        modal
        :closeOnEscape="true"
        :header="`Experince`"
        :dismissable-mask="true"
        :style="{ width: '50rem' }"
      >
        <div class="experince">
          <div class="experince-container">
            <RightIcon class="icon" />
            <span>Working As Frontend Developer vue js 1 year </span>
          </div>
          <div class="experince-container">
            <RightIcon class="icon" />

            <span
              >Worked As Instructor Of Arduino, C Programming, Python, Machine
              Learning, Computer Vision, AI, Scratch For 1 Year
            </span>
          </div>
          <div class="experince-container">
            <RightIcon class="icon" />

            <span
              >Experience In Html, Css, JavaScript,TypeScript ,SCSS React,
              TailWind, Git, Redux
            </span>
          </div>
          <div class="experince-container">
            <RightIcon class="icon" />

            <span>NTI Training 4 Months </span>
          </div>
          <div class="experince-container">
            <RightIcon class="icon" />

            <span>Embedded Systems Diploma </span>
          </div>
        </div>
      </Dialog>
    </div>
    <div class="experince">
      <Dialog
        v-model:visible="skillsvisible"
        modal
        :closeOnEscape="true"
        :header="`Skills`"
        :dismissable-mask="true"
        :style="{ width: '50rem' }"
      >
        <div class="skills">
            <div class="skill">
                <VueIcon class="icon"/>
                <span>Vue Js</span>
            </div>
            <div class="skill">
                <NuxtIcon class="icon"/>
                <span>Nuxt Js</span>
            </div>
            <div class="skill">
                <TypescriptIcon class="icon"/>
                <span>Typescript</span>
            </div>
            <div class="skill">
                <JavascriptIcon class="icon"/>
                <span>Javascript</span>
            </div>
            <div class="skill">
                <ReactIcon class="icon"/>
                <span>React Js</span>
            </div>
            <div class="skill">
                <ScssIcon class="icon"/>
                <span>Scss </span>
            </div>
           
        </div>
      </Dialog>
    </div>
  </div>
</template>