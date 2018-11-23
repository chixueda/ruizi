import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import menber from '../components/menber'
import search from '../components/search'
import shopcar from '../components/shopcar'
import newslist from '../components/news/newslist'
import newsinfo from '../components/news/newsinfo'
import photolist from '../components/photo/photolist'
import photoinfo from '../components/photo/photoinfo'
import goodslist from '../components/goods/goodslist'
import goodsinfo from '../components/goods/goodsinfo'
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
        },
        {
            path: '/home/newslist',
            name: 'newslist',
            component: newslist
        }, {
            path: '/home/newsinfo/:id',
            component: newsinfo
        },
        {
            path: '/home/photolist',
            component: photolist
        },
        {
            path: '/home/photoinfo/:id',
            component: photoinfo
        },
        {
            path: '/home/goodslist',
            component: goodslist
        }, {
            path: '/home/goodsinfo/:id',
            component: goodsinfo,
            name: "goodsinfo"
        }

    ],
    linkActiveClass: 'mui-active'
})