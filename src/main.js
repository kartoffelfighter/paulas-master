import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import HotkeyPlugin from 'v-hotkey3'

const app = createApp(App)

app.use(router)
app.use(HotkeyPlugin)

app.mount('#app')
