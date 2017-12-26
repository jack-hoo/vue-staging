// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './vuex/store'
import Router from 'vue-router'
import routers from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import 'element-ui/lib/theme-chalk/index.css'
import {getToken} from './utils/auth'
//Vue.config.productionTip = false
Vue.use(iView)
Vue.use(Router)
Vue.use(Vuex)

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: routers
};
const router = new Router(RouterConfig)

const whiteList = ['/login'];
router.beforeEach((to, from, next) => {
  //console.log(to)
  iView.LoadingBar.start();
  console.log(getToken())
  if (getToken()){
      if (to.path === '/login') {
          next({ path: '/' });
      } else {
          next();
      }
  }else {
      if (whiteList.indexOf(to.path) !== -1) {
          next()
      } else {
          next('/login');
          //iView.LoadingBar.finish();
      }
  }
  //Util.title(to.meta.title);
  next();
});

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  store,
  template: '<App/>',
  components: { App }
})
