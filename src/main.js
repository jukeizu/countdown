import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'
import vueAwesomeCountdown from 'vue-awesome-countdown'

Vue.use(VueAnalytics, {
  id: 'UA-171530007-1',
  router,
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  }
})

Vue.use(vueAwesomeCountdown);

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
