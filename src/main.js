import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import fastClick from 'fastclick'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')