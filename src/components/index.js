import { setMapOptions } from './mapkit'
import VueAppleMap from './VueAppleMap.vue'

export {
  VueAppleMap
}

export default {
  install (app, options = {}) {
    setMapOptions(options)
  }
}
