import './assets/main.css'
import { createApp } from 'vue'
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

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
