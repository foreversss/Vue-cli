<template>

  <el-container>
    <!--头部-->
    <el-header>
      <div class="hadeTitle">
        <img src="../assets/img/1608618865(1).jpg">
        <ul class="register-head">
          <li><img height="15" width="15" src="../assets/img/首页.svg"><span>首 页</span></li>
          <li><img height="20" width="20" src="../assets/img/登录.svg"><span>登 录</span></li>
          <li><img height="20" width="20" src="../assets/img/注册.svg"><span>注 册</span></li>
        </ul>
      </div>
    </el-header>
    <!--主体-->
    <el-main>
      <div class="container-register">
        <div class="container-head">
          注册新用户
          <hr class="head-hr">
        </div>
        <div class="container-main">

          <div class="main-form">
            <el-form ref="registerFormRef11" :rules="RegisterRules" label-width="100px" :model="RegisterForm">
              <el-form-item label="邮箱" prop="Mailbox">
                <el-input v-model="RegisterForm.Mailbox" placeholder="请输入邮箱"></el-input>
              </el-form-item>
              <el-form-item label="手机号码" prop="Phone">
                <el-input v-model="RegisterForm.Phone" placeholder="手机号码"></el-input>
              </el-form-item>
              <el-form-item label="登录用户名" prop="UserName">
                <el-input v-model="RegisterForm.UserName" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="显示名称" prop="Name">
                <el-input v-model="RegisterForm.Name" placeholder="请输入显示名称"></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <el-radio-group v-model="RegisterForm.Sex">
                  <el-radio label="0">男</el-radio>
                  <el-radio label="1">女</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="密码" prop="PassWord">
                <el-input v-model="RegisterForm.PassWord" placeholder="请输入密码" type="password"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="QRPassWord">
                <el-input placeholder="请输入确认密码" v-model="RegisterForm.QRPassWord" type="password"></el-input>
              </el-form-item>
              <el-form-item class="btns">
                <el-button type="primary" @click="register">注册</el-button>
              </el-form-item>

            </el-form>
          </div>
          <div class="main-img">
            <img src="../assets/img/registersideimg.png" width="300" height="300">
          </div>
        </div>
        <div class="container-footer"></div>
      </div>
    </el-main>
    <!--底部-->
    <el-footer>
      <div class="registerfooter">
        <a href="//www.cnblogs.com/AboutUS.aspx">关于博客园</a>
        <a href="//www.cnblogs.com/ContactUs.aspx">联系我们</a>
        ©2004-2020<a href="//www.cnblogs.com/">博客园</a>
        <span class="d-none d-md-inline">保留所有权利</span>
        <span id="powered_by">Powered by .NET Core on Kubernetes</span>
      </div>
    </el-footer>
  </el-container>

</template>
<script>
import { get, post } from '../httpConfig.js'
export default {

  data () {

    // 邮箱验证
    let checkEmail = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      if (!value) {
        return callback(new Error("邮箱不能为空"));
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的邮箱格式"));
        }
      }, 100);
    };

    // 密码验证
    let validatePass = (rule, value, callback) => {
      const pwdReg = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
      if (!value) {
        return callback(new Error("请输入密码"));
      } else if (pwdReg.test(value)) {
        callback();
      } else {
        callback(new Error("请输入包含数字字母的不低于8位数的密码"));
      }
    };
    //确认密码验证
    let validateQrpass = (rule, value, callback) => {
      if (value != this.RegisterForm.PassWord) {
        return callback(new Error("两次密码输入不一致"));
      } else {
        callback();
      }
    };
    // 手机验证
    let validateMobilePhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("手机号不可为空"));
      } else {
        if (value !== "") {
          var reg = /^1[3456789]\d{9}$/;
          if (!reg.test(value)) {
            callback(new Error("请输入有效的手机号码"));
          }
        }
        callback();
      }
    };
    return {
      //注册对象
      RegisterForm: {
        //用户名称
        UserName: "admin123",
        //用户密码
        PassWord: "admin123",
        //确认密码
        QRPassWord: "admin123",
        //显示名称
        Name: "bobo",
        //性别
        Sex: "0",
        //手机号码
        Phone: "13786337701",
        //邮箱
        Mailbox: "1695443384@qq.com"
      },
      //表单验证
      RegisterRules: {
        UserName: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 30, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        Mailbox: [
          { required: true, validator: checkEmail, trigger: "blur" }
        ],
        PassWord: [
          { required: true, validator: validatePass, trigger: "blur" }
        ],
        //确认密码
        QRPassWord: [
          { required: true, validator: validateQrpass, trigger: "blur" }
        ],
        Name: [
          { required: true, message: '请输入显示名称', trigger: "blur" },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        Phone: [
          { required: true, validator: validateMobilePhone, trigger: "blur" }
        ]
      }
    }
  },
  methods: {

    //注册
    register () {


      //验证表单验证是否通过
      this.$refs.registerFormRef11.validate(async (valid) => {

        //验证是否通过 如果不通过则停止
        if (!valid) return;

        let user = {
          UserName: this.RegisterForm.UserName,
          PassWord: this.RegisterForm.PassWord,
          Name: this.RegisterForm.Name,
          Sex: this.RegisterForm.Sex == "0" ? true : false,
          Phone: this.RegisterForm.Phone,
          Mailbox: this.RegisterForm.Mailbox
        };
        const { data: res } = await this.$http.post("Users/Register", user);

      });
    }
  }
}
</script>
<style lang="less" scoped>
.el-header {
  background-color: #283e5c;
}
.hadeTitle {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.register-head {
  list-style-type: none;
}
.register-head > li {
  display: inline;
  margin-left: 40px;
  color: #fff;
  cursor: pointer;
}
.register-head > li > img,
.register-head > li > span {
  vertical-align: middle;
  padding-left: 10px;
}
.el-footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -0);
  a {
    text-decoration: none;
  }
  .registerfooter {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .registerfooter > a {
    color: #007bff;
    padding-left: 20px;
  }
  .registerfooter > span {
    padding-left: 20px;
  }
}
.container-register {
  width: 870px;
  height: 530px;
  margin: 0 auto;
  margin-top: 50px;
}
.head-hr {
  margin-top: 0;
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.container-head {
  font-size: 21px;
}
.container-main {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.main-form {
  width: 500px;
  height: 500px;
}
.main-img {
  width: 300px;
  height: 300px;
  margin-top: 20px;
}
.main-img > img {
  border-radius: 8px;
}
.btns {
  display: flex;
  justify-content: center;
}
</style>