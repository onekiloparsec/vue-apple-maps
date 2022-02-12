import { setMapOptions } from './mapkit'
import VueAppleMaps from './VueAppleMaps.vue'

export {
  VueAppleMaps
}

export default {
  install (app, options = {}) {
    setMapOptions(options)
  }
}
