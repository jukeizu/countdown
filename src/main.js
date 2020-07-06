import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCountdown from '@chenfengyuan/vue-countdown';

Vue.component(VueCountdown.name, VueCountdown);

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
