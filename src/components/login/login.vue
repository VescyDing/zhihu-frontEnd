<template>
  <div id="login">
    <img class="bgimg" src='../../assets/img/loginBG.png' alt="">
    <img class="logo" src="../../assets/img/loginLogo.png" alt="">
    <div class="SignFlow-tabs">
      <span class="nopassw">免密码登录</span>
      <span class="passw clicked">密码登录</span>
    </div>
    <div class="from">
      <div class="passwordlogin">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-input type="text" v-model.number="ruleForm.account" class="fromItem" placeholder="手机号或邮箱"></el-input>
        <el-input type="password" v-model.number="ruleForm.password" class="fromItem" placeholder="密码"></el-input>
        <svg fill="#8590a6" id="eyes" width="24" height="20" viewBox="0 0 24 24" class="Icon SignFlow-switchPasswordIcon Icon--inconspicuous" aria-hidden="true" style="vertical-align: middle; height: 20px; width: 24px;"><title></title><g><title>Inconspicuous</title><path d="M17.007 11.504c0 .65-.13 1.26-.36 1.83l3 3.073S23 14.136 23 11.504C23 8.008 17.255 4 11.995 4c-1.4 0-2.741.25-3.982.701l2.161 2.16c.57-.23 1.18-.36 1.831-.36a5.004 5.004 0 0 1 5.002 5.003zM2.57 4.342l2.067 2.075C3.499 7.258 1 9.119 1 11.504c0 3.336 5.79 7.503 11.005 7.503 1.55 0 3.031-.3 4.382-.84l.42.42 2.125 2.118s.782.571 1.314 0-.074-1.305-.074-1.305L3.955 3.183s-.76-.742-1.385-.19c-.626.554 0 1.35 0 1.35zm4.963 4.96l1.55 1.552c-.05.21-.08.43-.08.65 0 1.66 1.341 3.001 3.002 3.001.22 0 .44-.03.65-.08l1.551 1.551c-.67.33-1.41.53-2.2.53a5.004 5.004 0 0 1-5.003-5.002c0-.79.2-1.53.53-2.201zm4.312-.78l3.151 3.152.02-.16c0-1.66-1.34-3.001-3.001-3.001l-.17.01z" fill-rule="evenodd"></path></g></svg>
        <div class="Login-options">
          <span class="overseas">海外手机号登录</span>
          <span class="forget">忘记密码？</span>
        </div>
        <el-button type="primary" @click="submitForm('ruleForm')" class="loginbtn">注册/登录</el-button>
        <div class="SignContainer-tip">
          <p>未注册手机验证后自动登录</p>
          <p>注册即代表同意《知乎协议》《隐私保护指引》</p>
          <a href="https://www.zhihu.com/org/signup">注册机构号</a>
        </div>
      </el-form>
      </div>
    </div>
      <div class="Login-socialLogin">
        <span class="frist">社交帐号登录</span>
        <span>
          <svg viewBox="0 0 20 19" class="Icon Login-socialIcon Icon--wechat" style="fill:#60c84d;height:18px;width:18px" width="18" height="18" aria-hidden="true"><title></title><g><path fill-rule="evenodd" d="M.224 18.667s4.24-1.825 4.788-2.056C13.03 20.14 20 14.715 20 8.9 20 3.984 15.523 0 10 0S0 3.984 0 8.898c0 1.86.64 3.585 1.737 5.013-.274.834-1.513 4.757-1.513 4.757zM6.167 8.96c.69 0 1.25-.57 1.25-1.27 0-.703-.56-1.272-1.25-1.272s-1.25.57-1.25 1.27c0 .703.56 1.272 1.25 1.272zm7.583 0c.69 0 1.25-.57 1.25-1.27 0-.703-.56-1.272-1.25-1.272s-1.25.57-1.25 1.27c0 .703.56 1.272 1.25 1.272z"></path></g></svg>
          微信</span>
        <span>
          <svg width="18" height="18" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" class="Icon Login-socialIcon Icon--qq" style="fill:#50c8fd;height:18px;width:18px" aria-hidden="true"><title></title><g><title>QQ</title><path d="M9.003 0c-2.265 0-6.29 1.364-6.29 7.325V8.52S.55 12.96.55 15.474c0 .665.17 1.025.28 1.025.115 0 .903-.485 1.75-2.073 0 0-.18 2.197 1.903 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.24.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.11 0 .283-.36.283-1.026 0-2.514-2.166-6.954-2.166-6.954V7.325C15.29 1.365 11.268 0 9.003 0z" fill-rule="evenodd"></path></g></svg>
          QQ</span>
        <span>
          <svg viewBox="0 0 22 18" class="Icon Login-socialIcon Icon--weibo" style="fill:#fb6622;height:18px;width:18px" width="18" height="18" aria-hidden="true"><title></title><g><g fill-rule="evenodd">     <path d="M14.518.06s-.87.644.03 1.71c0 0 6.287-1.19 5.69 6.33 0 0 1.05 1.13 1.674-.31 0 .002 1.44-8.584-7.394-7.73zM4.883 13.17s.038 2.584 3.326 2.584c3.657 0 3.683-2.98 3.683-2.98S12.1 9.67 8.687 9.61c-3.863-.07-3.804 3.56-3.804 3.56zM7.41 14.21c-.668 0-1.214-.447-1.214-.998 0-.55.543-.998 1.215-.998.67 0 1.213.447 1.213.998 0 .55-.54.998-1.212.998z"></path>     <path d="M4.317 4.52C-2.603 10.353.873 14.85.873 14.85c.57 1.01 3.382 3.1 8.596 3.1 5.21 0 9.314-3.628 9.314-6.44 0-2.813-2.918-2.714-2.918-2.714 1.04-1.554.19-2.65.19-2.65-1.684-2.118-5.404-.16-5.407-.158.772-1.717.11-2.797.11-2.797C8.932.66 4.317 4.52 4.317 4.52zm10.448 7.79s-.467 4.16-6.447 4.16c-5.745 0-5.82-3.322-5.842-3.712 0 0-.073-4.423 6.58-4.654 5.94-.204 5.71 4.207 5.71 4.207zM18.65 7.045s1.018-4.37-3.864-3.818c0 0-.628.58.09 1.346 0 0 2.602-.58 2.397 2.598 0 0 .715.885 1.376-.125z"></path>   </g></g></svg>
          微博</span>
      </div>
      <div class="downloadBtn">
        <svg width="20" height="20" fill="currentColor"><g fill="none" fill-rule="evenodd"><path fill="#0084FF" d="M15.234 0C18.125 0 20 1.875 20 4.766v10.468C20 18.125 18.125 20 15.234 20H4.766C1.875 20 0 18.125 0 15.234V4.766C0 1.875 1.875 0 4.766 0h10.468z"></path><path d="M0 0h20v20H0z"></path><path fill="#FFF" d="M10.313 10.352c0-.012-.004-1.036-.328-1.055h-2.26a48.42 48.42 0 0 0 .095-3.164h2.21c0-.003.084-.982-.37-.977H5.837c.15-.563.34-1.15.566-1.758 0 0-1.039 0-1.393.937-.146.386-.57 1.87-1.325 3.388.254-.028 1.095-.05 1.59-.963.091-.255.109-.289.222-.627h1.246c0 .452-.051 2.897-.072 3.164H4.414c-.507.019-.672 1.043-.672 1.055h2.832c-.19 2.15-1.209 3.972-3.058 5.413.884.253 1.766-.04 2.202-.43 0 0 .992-.906 1.536-3.004l2.33 2.817s.342-1.166-.053-1.734c-.328-.387-1.212-1.434-1.589-1.814l-.631.504a7.686 7.686 0 0 0 .34-1.752h2.662zM10.898 5v9.441h1.015l.334 1.145 1.82-1.144h2.144V5h-5.313zm4.258 8.398h-1.214l-1.212.782-.22-.782h-.518V6.016h3.164v7.382z"></path></g></svg>
        <span>下载知乎 App</span>
      </div>
      <footer class="SignFlowHomepage-footer"><div class="ZhihuLinks"><a target="_blank" rel="noopener noreferrer" href="https://zhuanlan.zhihu.com">知乎专栏</a><span class="Footer-dot"></span><a target="_blank" rel="noopener noreferrer" href="/roundtable">圆桌</a><span class="Footer-dot"></span><a target="_blank" rel="noopener noreferrer" href="/explore">发现</a><span class="Footer-dot"></span><a target="_blank" rel="noopener noreferrer" href="/app">移动应用</a><span class="Footer-dot"></span><a target="_blank" rel="noopener noreferrer" href="/contact">联系我们</a><span class="Footer-dot"></span><a target="_blank" rel="noopener noreferrer" href="https://app.mokahr.com/apply/zhihu">来知乎工作</a><span class="Footer-dot"></span><a target="_blank" rel="noopener noreferrer" href="/org/signup">注册机构号</a></div><div class="ZhihuRights"><span>© <!-- -->2019<!-- --> 知乎</span><span class="Footer-dot"></span><a target="_blank" rel="noopener noreferrer" href="https://tsm.miit.gov.cn/dxxzsp/">京 ICP 证 110745 号</a><span class="Footer-dot"></span><a target="_blank" rel="noopener noreferrer" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020088"><img src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png">京公网安备 11010802010035 号</a><span class="Footer-dot"></span><a href="https://zhstatic.zhihu.com/assets/zhihu/publish-license.jpg" target="_blank" rel="noopener noreferrer">出版物经营许可证</a></div><div class="ZhihuReports"><a target="_blank" rel="noopener noreferrer" href="https://zhuanlan.zhihu.com/p/51068775">侵权举报</a><span class="Footer-dot"></span><a target="_blank" rel="noopener noreferrer" href="http://www.12377.cn">网上有害信息举报专区</a><span class="Footer-dot"></span><a target="_blank" rel="noopener noreferrer" href="/jubao">儿童色情信息举报专区</a><span class="Footer-dot"></span><span>违法和不良信息举报：010-82716601</span></div></footer>
  </div>
</template>

<script>
  export default {
    name:'',
    props:[''],
    data () {
      return {
        ruleForm: {
          account: '',
          password: ''
        },
        rules: {
        }
      };
    },

    components: {

    },

    computed: {},

    beforeMount() {},

    mounted() {
      if (this.$cookies.get('loginStatus')){
        if (this.$cookies.get('loginStatus').isLogin){
          this.$router.push('/')
        }
      }
    },

    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const that = this
            this.$axios.post('/login', that.ruleForm, res => {
              console.log(res.data)
              // eslint-disable-next-line no-console
              if (res.status != 200){
                that.$message({
                  showClose: true,
                  message: res.data.message,
                  type: 'error'
                });
              } else {
                that.$message({
                  showClose: true,
                  message: res.data.message,
                  type: 'success'
                });
                res.data.userData.creatTime = new Date(res.data.userData.creatTime).valueOf()
                this.$cookies.set('loginStatus', {isLogin: true})
                this.$cookies.set('userData', res.data)
                this.$router.push('/')
                window.location.reload()
              }
              console.log(res)
            })

          } else {
            // console.log('error submit!!');
            return false;
          }
        });
      },
    },

    watch: {}

  }

</script>
<style lang='css'>
html,body {
  height: 900px;
  /* min-height: 1200px; */
}
#login {
  position: relative;
}
.bgimg {
  float: left;
  background-color: #b8e5f8;
}
#login .logo {
  height: 80.875px;
  width: 128px;
  z-index: 999;
  position: absolute;
  top: 30px;
  display: block;
  left: 50%;
  transform: translateX(-50%)
}
.from {
  width: 400px;
  height: 375px;
  padding: 88px 24px 84px 24px;
  background-color: #fff;
  z-index: 999;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 135px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  box-sizing: border-box;
}
.SignFlow-tabs {
  width: 352px;
  height: 60px;
  position: absolute;
  top: 135px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}
.SignFlow-tabs span {
  display: inline-block;
  color: #444;
  font-size: 16px;
  line-height: 60px;
  height: 60px;
  margin-right: 24px;
  cursor: pointer;
}
.clicked {
  font-weight: 700;
  color: #000;
  border-bottom: 2px solid #0084ff;
}
.passwordlogin .fromItem input {
  border: none;
  border-bottom: 1px solid #eee;
  border-radius: 0;
  padding-top: 12px;
  height: 48px;
  width: 352px;
}
.passwordlogin .loginbtn {
  margin-top: 30px;
  width: 100%;
}
.passwordlogin .Login-options {
  height: 20px;
  width: 352px;
  margin-top: 12px;
}
.passwordlogin .overseas{
  color: #175199;
  font-size: 14px;
  cursor: pointer;
}
.passwordlogin .forget{
  font-size: 14px;
  color: #8590a6;
  cursor: pointer;
  margin-left: 184px;
}
.SignContainer-tip {
  width: 352px;
  height: 34px;
  padding: 12px 24px;
  color: grey;
  font-size: 13px;
  background-color: #f6f6f6;
  z-index: 1000;
  box-sizing: content-box;
  position: absolute;
  top: 317px;
  left: 0;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}
.SignContainer-tip a {
  color: #175199;
  position: absolute;
  right: 24px;
  top: 20px;
  text-decoration: none;
}
#eyes {
  position: absolute;
  top: 152px;
  right: 35px;
  cursor: pointer;
}
.Login-socialLogin {
  width: 400px;
  height: 60px;
  padding: 0 24px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  position: absolute;
  top: 535px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  border-radius: 2px;
  font-size: 16px;
  color: #8590a6;
  vertical-align: middle;
  line-height: 60px;
}
.Login-socialLogin .frist {
  margin-right: 49px;
}
.Login-socialLogin span {
  margin-right: 24px;
}
.downloadBtn {
  width: 400px;
  height: 42px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  position: absolute;
  top: 619px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
  color: #0084ff;
  vertical-align: middle;
  line-height: 42px;
  text-align: center;
}
.downloadBtn svg {
  position: absolute;
  top: 11px;
  left: 124px;
}
.SignFlowHomepage-footer {
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 2px #999;
    padding-bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    top: 770px;
    z-index: 1000;
    position: absolute;
}
.SignFlowHomepage-footer a {
  text-decoration: none;
  font-size: 12px;
    line-height: 21px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 2px #999;
    padding-bottom: 20px;
}
footer {
    display: block;
}
.Footer-dot {
  width: 2px;
  height: 2px;
  margin: 5px 5px;
}
.Footer-dot::after {
  content: '·';
  color: #fff;
  font-weight: 700;
}
</style>