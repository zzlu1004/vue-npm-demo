import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import DatePicker from './../packages/index'
// 注册组件库
Vue.use(DatePicker)
Vue.prototype.appName = 'My App'
console.dir(Vue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
