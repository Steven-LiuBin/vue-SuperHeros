// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入mint-ui以及样式
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入MUI样式
import './lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css'

import router from './router'

Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
