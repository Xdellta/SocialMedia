import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.scss'
import Avatar from './components/postsComponents/Avatar.vue'

const app = createApp(App)
app.component('Avatar', Avatar)

app.use(router)

app.mount('#app')