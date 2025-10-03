import { createRouter, createWebHistory } from 'vue-router'
import HomeAboutMe from '../components/Home/HomeAboutMe.vue'
import AboutMe from '../components/About/AboutMe.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeAboutMe
        },
        {
            path: '/about',
            name: 'About',
            component: AboutMe
        },
        
    ],
})

export default router
