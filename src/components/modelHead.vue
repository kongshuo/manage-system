<template>
  <header>
    <div class="logo">
      <a href="javascript:void(0)"><i class="manage managecaidan"></i></a>
      <span>后台管理系统</span>
    </div>
    <div class="fr">
      <div class="logo-mess">
        <el-tooltip content="全屏" placement="bottom">
          <a href="javascript:void(0)" title="全屏" @click="screen()"><i class="manage managequanping"></i></a>
        </el-tooltip>
        <el-tooltip content="未读消息" placement="bottom">
          <a href="javascript:void(0)" class="unread" @click="unread()"><i class="manage managexiaoxi1"></i><span class="circle"></span></a>
        </el-tooltip>
        <img class="user-logo" src="../assets/images/user-logo.jpg" alt="logo"/>
        <el-dropdown trigger="click" @command="dropHandle">
          <span class="el-dropdown-link">
            {{usermess}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item,index) in userlist" :key="index">{{item}}</el-dropdown-item>
            <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data(){
    return {
      usermess:'',           //用户名
      userlist:['个人信息'],  //用户信息
      isFullScreen:false     //是否全屏，默认非全屏
    }
  },
  methods: {
    getUsermess(){
      this.usermess = localStorage.getItem('username');
    },
    //全屏点击
    screen(){
      if(!this.isFullScreen){
        this.fullScreen();
      }else{
        this.exitScreen();
      }
      this.isFullScreen = !this.isFullScreen; //改变当前屏幕状态 
    },
    //全屏事件
    fullScreen(){
      let ele = document.documentElement;
      if(ele.requestFullscreen){       //高版本浏览器
        ele.requestFullscreen();
      }else if(ele.msRequestFullscreen){ //ie浏览器
        ele.msRequestFullscreen();
      }else if(ele.mozRequestFullScreen){ //firefox
        ele.mozRequestFullScreen();
      }else if(ele.webkitRequestFullscreen){ //webkit内核浏览器
        ele.webkitRequestFullscreen();
      }
    },
    //退出全屏事件
    exitScreen(){
      if (document.exitFullscreen) {
          document.exitFullscreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
      }
    },
    //未读消息
    unread(){
      this.$router.push({path:'/unread',query:{unreadNum:'1'}})
    },
    //用户信息下拉菜单点击事件
    dropHandle(command){
      if(command=='logout'){
        this.logout();
      }
    },
    //退出登录
    logout(){
       localStorage.removeItem('username') //清除登录用户信息
       this.$router.push({path:'/login'})
    }
  },
  created() {
    this.getUsermess();
  }
}
</script>
<style lang="less" scoped>
.fr{
  float: right;
}
header{
  width:100%;
  height:100%;
  color: #fff;
  background-color: #242f42;
}
.logo{
  float: left;
  line-height: 60px;
  a{
    display: inline-block;
    height: 100%;
    line-height: 60px;
    padding: 0 20px;
    color: #fff;
    &:hover{
      background-color: rgb(40,52,70);
    }
    i{
      font-size: 22px;
    }
  }
  span{
    font-size: 22px;
  }
}
.logo-mess{
  display: flex;
  flex-direction:row;
  flex-wrap: nowrap;
  justify-content:center;
  align-items:center;
  height: 60px;
  padding-right:50px;
}
.el-tooltip{
  margin-left: 15px;
  i{
    font-size: 22px;
    color: #fff;
  }
}
.el-dropdown{
  margin-left: 15px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}
.user-logo{
  width: 35px;
  height: 35px;
  border-radius: 100%;
  margin-left: 15px;
}
.unread{
  position: relative;
  .circle{
    display: block;
    position: absolute;
    top: -2px;
    right: -2px;
    z-index: 1;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: #f56c6c;
  }
}
</style>
