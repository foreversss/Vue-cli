<template>
  <div class="login_container">
    <div class="login_box">
      <div class="login_title">博客园用户登录</div>
      <div class="login_img"><img src="../assets/img/login-sign.svg"></div>
      <div class="login_box1">
        <el-tabs v-model="activeName" @tab-click="handleClick">

          <el-tab-pane label="密码登录" name="first">
            <el-form ref="loginFormRef" :model="LoginForm" :rules="LoginFormRules">
              <!--用户名-->
              <el-form-item prop="UserName">
                <el-input v-model="LoginForm.UserName" prefix-icon="icons iconuser"></el-input>
              </el-form-item>
              <!--密码-->
              <el-form-item prop="PassWord">
                <el-input type="password" v-model="LoginForm.PassWord" prefix-icon="icons iconmima3"></el-input>
              </el-form-item>
              <!--按钮-->
              <el-form-item class="btns">
                <router-link class="register" :to="{path:'/register'}">没有账户，立即注册</router-link>
                <el-button type="primary" @click="Login">登录</el-button>
                <el-button type="info" @click="resetLoginForm">重置</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="短信登录" name="second">

          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { get, post } from '../httpConfig.js'
export default {
  data () {
    return {
      activeName: 'first',

      //登录表单绑定数据对象
      LoginForm: {
        //用户名
        UserName: "",
        //密码
        PassWord: ""
      },

      //验证规则对象
      LoginFormRules: {

        //用户名验证
        UserName: [
          { required: true, message: '请输入用户名称', trigger: 'blur' }
        ],
        //密码验证
        PassWord: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]

      }

    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    },
    //重置
    resetLoginForm () {

      //console.log(this);
      //重置form表单值
      this.$refs.loginFormRef.resetFields();
    },
    //登录
    Login () {
      //验证表单验证是否通过
      this.$refs.loginFormRef.validate(async (valid) => {

        //验证是否通过 如果不通过则停止
        if (!valid) {
          return;
        }

        const res = await this.$http.post('Users/SignIn', this.LoginForm);
        if (res.statecode == 0) {
          this.$message.success("登录成功");
          window.sessionStorage.setItem("token", res.rows.userToken);
          this.$router.push("/home")
        } else {
          this.$message.error("账号或密码错误！");
        }
      });
    }
  }
}
</script>
<style lang="less" scoped>
.login_container {
  background-color: #e0e4e8;
  height: 100%;
}
.login_box {
  background-color: #fff;
  width: 420px;
  height: 420px;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login_title {
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
}
.login_img > img {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-top: 30px;
}
.login_img {
  text-align: center;
}
.login_box1 {
  margin-top: 40px;
  width: 80%;
  height: 50%;
  // border: solid 1px red;
  position: absolute;
  left: 50%;
  top: 53%;
  transform: translate(-50%, -50%);
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.register {
  margin-right: 60px;
  text-decoration: none;
}
</style>
