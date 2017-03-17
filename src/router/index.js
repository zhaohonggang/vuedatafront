import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Hello from '@/components/Hello'
import Home from '@/components/home.vue'
import About from '@/components/about.vue'
import Manage from '@/components/manage.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: Home},
    { path: '/about', component: About},
    { path: '/manage', components: {manage: Manage}},
    ]
})
