# vue-apple-maps

A modern [Vue](https://vuejs.org) component for Apple (MapKit JS) built with
[Vite](https://vitejs.dev).

Initially inspired by [MapkitVue](https://github.com/thomas-alrek/MapkitVue)

# Installation

```bash
npm install --save vue-apple-maps
```

## Usage

Please follow the official [MapkitJS documentation](https://developer.apple.com/maps/mapkitjs/) 
to setup your API credentials.

Once you have a token, place it inside a file `.env`:

```.env(.development|.prod)
VITE_APP_APPLEMAPS_TOKEN=<your token>
```

Then, in your Vue3 app, install the plugin (not the plural, the plugin
being named like the lib):

``` js
import { createApp } from 'vue'
import App from './App.vue'

// import VueAppleMaps plugin
import VueAppleMaps from 'vue-apple-maps'

createApp(App)
  .use(VueAppleMaps, {
    authorizationCallback (done) {
      done(import.meta.env.VITE_APP_APPLEMAPS_TOKEN)
    }
  })
  .mount('#app')
```

Finally, in one of your components (note the singular to indicate the 
Map component):

```vue
<template>
  <VueAppleVueAppleMapMaps class="map"/>
</template>

<script>
  import { VueAppleMap } from 'VueAppleMaps'

  export default {
    components: { VueAppleMap }
  }
</script>
```
