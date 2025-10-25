import { createMemoryHistory, createRouter } from 'vue-router'
import HomeDetails from '../components/Home/HomeDetails.vue'
import ProjectsPage from '../components/Projects/ProjectsPage.vue'
import AboutMeSection from '../components/About/AboutMeSection.vue'

const routes = [
  { path: '/', component: HomeDetails },
  { path: '/projects', component: ProjectsPage },
  { path: '/about', component: AboutMeSection },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})