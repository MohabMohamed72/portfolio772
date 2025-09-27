import { createApp } from 'vue'
import './assets/styles/main.min.css'
import './assets/styles/tailwind.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app')
