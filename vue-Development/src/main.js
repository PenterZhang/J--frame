import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 修改顶部标题配置
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
