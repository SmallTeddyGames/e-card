import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import i18n from './i18n'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './styles/base.css'

const app = createApp(App)
app.use(router)

app.use(i18n).mount('#app')
