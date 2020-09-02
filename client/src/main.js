import Vue from 'vue'
import App from './app/App.vue'
import router from './app/app.routes'
import store from './app/app.state'
import Buefy from 'buefy'
import './assets/scss/app.scss'

Vue.use(Buefy)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
