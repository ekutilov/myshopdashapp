/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
//import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'


// Composables
import { createVuetify } from 'vuetify'


export default createVuetify({
  theme: {
   
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
