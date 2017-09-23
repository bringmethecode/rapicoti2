import Vue from 'vue'
import App from './App'
import router from './router'

import Buefy from 'buefy'
import VueAgile from 'vue-agile'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueAgile)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
