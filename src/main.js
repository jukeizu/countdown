import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCountdown from '@chenfengyuan/vue-countdown';
import VueAnalytics from 'vue-analytics'

Vue.component(VueCountdown.name, VueCountdown);

Vue.use(VueAnalytics, {
  id: 'UA-171530007-1',
  router,
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  }
})

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
