import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.scss'

import Avatar from './components/postsComponents/Avatar.vue'
import Nick from './components/postsComponents/Nick.vue'

const app = createApp(App)

app.component('Avatar', Avatar)
app.component('Nick', Nick)

app.use(router)

app.mount('#app')