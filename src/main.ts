import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import eventEmitter from './manager/eventEmitter'

import '@unocss/reset/tailwind.css'

import './styles/main.css'
import 'uno.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

eventEmitter.on('API:UN_AUTH', () => {
  router.replace({ path: '/account/login' })
})

app.mount('#app')
