import Vue from 'vue'
import App from './App.vue'
import store from './store'
import globalComponents from '@/plugins/baseComponents.js'

Vue.config.productionTip = false
Vue.use(globalComponents)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
