import Vue from 'vue'
import VueQrcodeReader from 'vue-qrcode-reader'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueQrcodeReader)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
