import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import './samples/node-api'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

const app = createApp(App)

app.use(i18n).mount('#app').$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*')
})
