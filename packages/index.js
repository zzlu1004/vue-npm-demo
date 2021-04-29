import Demo from './Demo'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题

const components = [
    Demo
]

const install = function(Vue){
    components.forEach(component => {
        Vue.component(component.name,component)
    });
    Vue.use(ElementUI, {
        size: 'small'
    });
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    Demo
}