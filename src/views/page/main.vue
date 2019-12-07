<template>
  <div class="main">
    <el-container style="width:100%;height:100%;">
      <!-- 顶部 -->
      <el-header style="height:60px;padding:0;">
        <model-head></model-head>
      </el-header>
      <!-- 底部 -->
      <el-container>
        <!-- 左侧菜单栏 -->
        <el-aside width="180px;">
          <model-aside></model-aside>
        </el-aside>
        <!-- 右侧内容区 -->
        <el-main>
          <transition name="main">
            <keep-alive>
                <router-view v-if="$route.meta.isKeepLive"></router-view>
                <router-view v-else></router-view>
            </keep-alive>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import modelHead from '../../components/modelHead.vue'
import modelAside from '../../components/modelAside.vue'
export default {
  data(){
    return{
      a:1
    }
  },
  components:{modelHead,modelAside}
}
</script>
<style lang="less" scoped>
  .main{
    width: 100%;
    height: 100%;
  }
.main-enter-active, .main-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .main-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
