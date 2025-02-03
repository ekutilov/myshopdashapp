import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

const bod = document.getElementsByTagName('body')[0]
const div = document.createElement('div')
const el = bod.appendChild(div) 

createApp(App).use(vuetify).mount(el)

