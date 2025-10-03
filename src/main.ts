import { createApp } from 'vue'
import './assets/styles/main.min.css'
import './assets/styles/tailwind.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import router from './router/index'
import ToastService from 'primevue/toastservice';
import 'primeicons/primeicons.css'


const app = createApp(App)
app.use(router)
app.use(ToastService);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app')
