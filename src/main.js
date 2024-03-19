import './assets/main.css'
import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { makeServer } from './api/server'
// setup fake backend
import { fakeBackend } from './helpers/fakeBackend'

const vuetify = createVuetify({
  components,
  directives
})

if (process.env.NODE_ENV === 'development') {
  makeServer()
  fakeBackend()
}

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(router)
app.use(pinia)
app.use(vuetify)
app.mount('#app')
