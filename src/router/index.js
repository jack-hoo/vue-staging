import Login from '../views/login'
import NotFound from '../views/404.vue'
import Main from '../views/main.vue'
import Test from '../views/menus/test.vue'

const routers = [
  /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
  {
    path: '/',
    component: Main,
    meta: {
      title: '系统管理'
    },
    children: [
      {path: '/', component: Test, name: 'test'}

    ],

  },
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: false
  },
  {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
  },
  {
    path: '*',
    hidden: true,
    redirect: {path: '/404'}
  }
]

export default routers;
