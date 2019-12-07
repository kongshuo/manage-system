import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//对应组件
const login = reslove => require(['../views/login/login'],reslove)//登录页
const main = reslove => require(['../views/page/main'],reslove) //主页
const unread = reslove => require(['../views/page/unread'],reslove) //未读消息
//全局路由
export default new Router({
  routes:[
    {
      path:'/',
      redirect:'/login' //路径为空，重定向至登录页
    },
    //登录页
    {
      path:'/login',
      component:login
    },
    //首页
    {
      path:'/main',
      name:'main',
      component:main,
      children:[
        //未读信息
        {
          path:'/unread',
          name:'unread',
          component:unread
        }
      ]
    }
  ]
})
