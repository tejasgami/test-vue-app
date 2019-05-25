import Vue from 'vue'
// main.styl
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
