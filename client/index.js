import Vue from 'vue'
import App from 'components/App'
import settings from 'lib/settings'

// Import favicon
import 'assets/favicon/favicon.png'

// Global vue stuffs
import 'gsap'
import 'locales/index'

// Routing
import router from 'client/router'

// Store
import store from 'client/store'

// Add vue-resource to Vue
import VueResource from 'vue-resource'
Vue.use(VueResource)

let isProduction = process.env.NODE_ENV === 'production'

Vue.http.options.root = isProduction ? settings.production.API_URL : `${settings.API.url}:${settings.API.port}`

// Sync store with router
import { sync } from 'vuex-router-sync'
sync(store, router)

// Import a-frame libraries
import 'aframe-gradient-sky'
import 'aframe-gridhelper-component'
import 'aframe-look-at-component'

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
