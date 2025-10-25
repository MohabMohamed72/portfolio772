<script setup lang="ts">
import { ref } from "vue";
import SwiperSection from "../Swiper/SwiperSection.vue";
import type { ProjectInterface } from "../../types/projectsInterface";
import ProjectCard from "./ProjectCard.vue";
import ORBIT from "../../assets/images/ORBIT.png";
import HSE from "../../assets/images/HSE.png";
import AlKhalil from "../../assets/images/AlKhalil.png";
import LocationStudio from "../../assets/images/LocationStudio.png";
import SAAS from "../../assets/images/SAAS.png";
import Ecom from "../../assets/images/ecom.png";
import Filmpire from "../../assets/images/Filmpire.png";

const Projects = ref<ProjectInterface[]>([
  {
    title: "Orbit System",
    img: ORBIT,
    langs: ["Nuxt", "Vue", "Scss", "Typescript"],
    description:
      "A complete web-based system designed for engineering companies to manage projects, clients, reservations, and financial operations from a centralized dashboard",
    ProjectLink: "https://orbitconsults.com/",
  },
  {
    title: "HSE System",
    img: HSE,
    langs: ["Nuxt", "Vue", "Scss", "Typescript"],
    description:
      " A modern Health, Safety & Environment (HSE) platform designed to promote human safety awareness and p",
    ProjectLink: "https://hse.techlabeg.com/",
  },
  {
    title: "Location",
    img: LocationStudio,
    langs: ["Nuxt", "Vue", "Scss", "Typescript"],
    description:
      " modern platform designed to help users discover, compare, and book studios and creative spaces through a responsive website and a powerful admin dashboard.",
    ProjectLink: "https://locationstudio.net/",
  },
  {
    title: "Al Khalil",
    img: AlKhalil,
    langs: ["Nuxt", "Vue", "Scss", "Typescript"],
    description:
      " A comprehensive travel booking platform designed to manage airline reservations, hotel bookings, room management, and payments in one integrated system. The project provides both a public-facing website for travelers and a dashboard for administrators and travel agencies",
    ProjectLink: "https://al-khalil.techlabeg.com/",
  },
  {
    title: "Education",
    img: SAAS,
    langs: ["Nuxt", "Vue", "Scss", "Typescript"],
    description:
      "modern educational system designed to deliver and manage online learning through an interactive website and a powerful admin dashboard",
    ProjectLink: "https://website.saas.techlabeg.com/",
  },
  {
    title: "Ecommerce",
    img: Ecom,
    langs: ["Vue", "Scss", "Typescript"],
    description: "Ecommerce Vue js Website",
    ProjectLink: "https://ecommerce759.netlify.app/",
  },
  {
    title: "Filmpire",
    img: Filmpire,
    langs: ["React", "Redux", "Typescript", "Tailwind"],
    description:
      "A comprehensive web application that provides an extensive collection of movies, complete with detailed information about each film using React js , Tailwind , Redux Toolkit",
    ProjectLink: "https://filmpiren.netlify.app/",
  },
]);
</script>

<template>
  <div class="projects">
    <p class="title">My Projects</p>

    <div class="prjects-cards">
      <div v-for="(project, index) in Projects" :key="index">
        <ProjectCard :cardItem="project" class="card" />
      </div>
    </div>
  </div>
</template>