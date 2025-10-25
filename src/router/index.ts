import { createMemoryHistory, createRouter } from 'vue-router'
import HomeDetails from '../components/Home/HomeDetails.vue'
import ProjectsPage from '../components/Projects/ProjectsPage.vue'
import AboutMeSection from '../components/About/AboutMeSection.vue'
import ContactMeSection from '../components/Contact/ContactMeSection.vue'

const routes = [
  { path: '/', component: HomeDetails },
  { path: '/projects', component: ProjectsPage },
  { path: '/about', component: AboutMeSection },
  { path: '/contact', component: ContactMeSection },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})