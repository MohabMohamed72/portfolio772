import { createRouter, createWebHistory } from 'vue-router'
import HomeAboutMe from '../components/Home/HomeAboutMe.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeAboutMe
        },
        
    ],
})

export default router
