// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import router from './router'
import 'mint-ui/lib/style.css'
import vueResource from 'vue-resource'
import { Lazyload } from 'mint-ui'
import './assets/mui.min.css'
import './assets/icons-extra.css'
import moment from 'moment'
import 'mint-ui/lib/style.css'
import VuePreview from 'vue-preview'
Vue.use(Lazyload)
Vue.use(MintUI)
Vue.use(VuePreview)

Vue.use(vueResource)
Vue.config.productionTip = false
Vue.http.options.emulateJSON = true;
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
        return moment(dataStr).format(pattern)

    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})