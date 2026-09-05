import './assets/main.css'
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'

// Prevent automatic browser scroll jumping on page reload
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

const app = createApp(App)

app.use(router)

app.mount('#app')

