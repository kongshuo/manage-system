<template>
  <div>未读{{unreadNum}}条</div>
</template>
<script>
export default {
  data(){
    return{
      unreadNum:'' //未读条数
    }
  },
  created(){
    this.unreadNum = this.$route.query.unreadNum
  }
}
</script>