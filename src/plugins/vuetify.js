import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
const MY_ICONS = {
  'size1': require('../assets/icon/size-1.svg')
}

Vue.use(Vuetify, {
  iconfont: 'md',
  icons: MY_ICONS
})
