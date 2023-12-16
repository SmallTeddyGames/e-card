import { createApp } from 'vue'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './styles/base.css'
import router from './router'
import draggableComponent from 'vuedraggable'

const app = createApp(App)

app.use(router).component('draggable',draggableComponent)

app.mount('#app')
