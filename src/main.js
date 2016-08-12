import Vue from 'vue'
import VueRouter from 'vue-router'
import vueRouterMap from './router'
import App from './App.vue';
Vue.use(VueRouter);
Vue.config.debug = false;
var router = new VueRouter({
    history: true
})
vueRouterMap(router);
router.start(App, '#app')