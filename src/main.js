import { createApp } from 'vue'
import App from './App.vue'
import VueAppleMaps from './components'

createApp(App)
  .use(VueAppleMaps, {
    authorizationCallback (done) {
      done(import.meta.env.VITE_APP_APPLEMAPS_TOKEN)
    }
  })
  .mount('#app')
