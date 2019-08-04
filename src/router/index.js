import Vue from 'vue'
import Router from 'vue-router'
// import Logout from '../utils/destroy-session'
// import Guard, {isApproved,isAdministrator,isSuperAdmin} from '../utils/router-guard'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/', component: resolve => require(['@/views/LayoutPage/StaticWrap'],resolve),
      children: [
        { path: '', name: '', meta: {}, component: resolve => require(['@/views/Home/index'],resolve),
          children: [
            { path: '', name: 'home', meta: {title: '首页'}, component: resolve => require(['@/views/Home/index'],resolve)},
          ]
        },
      ]
    },
    
    // { path: '/login', name: "login", meta:{ title: '登录注册'}, component: resolve => require(['@/views/Login/Login'],resolve), props: route => ({ redirect: route.query.redirect }) },
    // { path: '/logout', name: "logout", beforeEnter: Logout },
    // { path: '**', meta:{ title: '404'}, component: resolve => require(['@/views/404'],resolve) },
  ]
})

router.onError((error) => {
  location.reload()
});

export default router;