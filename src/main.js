import { createApp } from 'vue'
import './assets/css/reset.css'
import './assets/css/common.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// createApp(App).mount('#app')
app.mount('#app')
