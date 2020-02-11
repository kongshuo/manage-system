import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI,{ size: 'small' })

//路由全局钩子函数
router.beforeEach((to,from,next)=>{
  let username = localStorage.getItem('username');
  if(to.path!=='/login'){
    if(!username){
      next('/login');
    }else{
      next();
    }
  }else{
    next();
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
