import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import 'babel-polyfill'

/*Vue.config.productionTip = false*/

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

router.afterEach(() => {
  document.body.scrollTop = 0
})