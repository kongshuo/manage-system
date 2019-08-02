import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      redirect:'/login' //路径为空，重定向至登录页
    },
    //登录页
    {
      path:'/login',
      component:reslove => require(['../views/login/login'],reslove)
    }
  ]
})
