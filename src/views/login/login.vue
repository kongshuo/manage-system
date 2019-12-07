<template>
  <div class="login">
    <div class="loginContent">
      <div class="loginTips">后台管理系统</div>
      <div class="loginForm">
        <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名" auto-complete="off">
              <template slot="prepend">
                <span><i class="manage manageusername"></i></span>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" auto-complete="off">
              <template slot="prepend">
                 <span><i class="manage managemima"></i></span>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login('loginForm')" style="width:100%;">登 录</el-button>
          </el-form-item>
        </el-form>
        <p class="loginHint">tips: 请用admin登录，密码是1</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    //验证username
    var vaildateusername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        if(value != 'admin'){
           callback(new Error('当前用户名不存在'));
        }
        callback();
      }
    };
    //验证password
    var vaildatepassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }else {
        callback();
      }
    };
    return {
      loginForm: {
        username: '', //用户名
        password: '' //密码
      },
      //form验证
      rules: {
        username: [
          { validator: vaildateusername, trigger: 'blur' }
        ],
        password: [
          { validator: vaildatepassword, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          localStorage.setItem('username',this.loginForm.username) //存入浏览器缓存localStorage中
          this.$router.push({name:'main'}) 
        } else {
          return false
        }
      });
    }
  }
}
</script>
<style lang="less" scoped>
.login{
  position: relative;
  width: 100%;
  height:100%;
  background-image: url(../../assets/images/login-bg.jpg);
  background-size:100% 100%; 
}
.loginContent{
  position: absolute;
  z-index: 10;
  top:50%;
  left: 50%;
  transform:translate(-50%,-50%);
  width: 350px;
  border-radius: 5px;
  background: rgba(2, 27, 94, 0.247);
}
.loginTips{
  width: 100%;
  border-bottom: 1px solid #ddd;
  line-height: 50px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
.loginForm{
  padding: 30px;
}
.loginHint{
  font-size: 12px;
  color: #f00;
}
</style>


