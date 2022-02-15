import { createApp } from 'vue'
import { router } from './routers'
import App from './views/App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
