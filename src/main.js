// 入口文件

import Vue from 'vue'
// 按需导入Miut-ui组件
import { Header, Swipe, SwipeItem  } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入mui文件
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)
// 1.1 导入 路由的包
import VueResource from 'vue-resource';
// 1.2 安装路由
Vue.use(VueResource);

// 1.3 导入自己的 router.js路由模块
import router from './router.js'


// 导入项目根组件
import App from './App.vue';
import './lib/style.css'
var vm= new Vue({
  el: '#app',
  router,
  render: c=> c(App)
})