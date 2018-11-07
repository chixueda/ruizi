import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import menber from '../components/menber'
import search from '../components/search'
import shopcar from '../components/shopcar'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: '',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/menber',
            name: 'menber',
            component: menber
        },
        {
            path: '/search',
            name: 'search',
            component: search
        },
        {
            path: '/shopcar',
            name: 'shopcar',
            component: shopcar
        }
    ],
    linkActiveClass: 'mui-active'
})