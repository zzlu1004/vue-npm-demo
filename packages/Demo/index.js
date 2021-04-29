import demo from './src/demo.vue'
demo.install = function(Vue){
    Vue.component(demo.name, demo)
}
export default demo