<template>
  <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
    <div class="login_wrap">
      <div class="login_top">
        <div class="wrapper">
            <div class="login_sysname">
              <span class="login_logo">
                <!-- <img class="logoimg" src="@/assets/logins/blank.png"> -->
                </span><h1>Vue Element</h1>
            </div>
        </div>
      </div>
      <div class="login_body">
        <div class="banner_show">
          <div class="cell bns_01">
            <div class="con">
              <div class="banner_link"></div>
            </div>
          </div>
        </div>

        <div class="wrapper">
            <div class="login_form">
              <div class="login_title">
                <a href="javascript:;" id="login_title_1" @click="cur=0" :class="{on:cur==0}"><i class="ico_title"></i>账号登录</a>
                <a href="javascript:;" id="login_title_2" @click="cur=1" :class="{on:cur==1}"><i class="ico_title ico_sface"></i>刷脸登录</a>
              </div>
              <!-- 帐密登录 -->
              <div class="login_con" v-show="cur==0">
                  <el-form-item prop="username" class="login_input">
                    <!-- <span class="svg-container">
                      <svg-icon icon-class="user" />
                    </span> -->
                    <span class="login_icon _user"></span>
                    <el-input
                      ref="username"
                      v-model="loginForm.username"
                      placeholder="请输入用户名"
                      name="username"
                      type="text"
                      tabindex="1"
                      auto-complete="on"
                      class="inputText"
                    />
                  </el-form-item>
                  <el-form-item prop="password" class="login_input">
                    <!-- <span class="svg-container">
                      <svg-icon icon-class="password" />
                    </span> -->
                    <span class="login_icon _pass"></span>
                    <el-input
                      :key="passwordType"
                      ref="password"
                      v-model="loginForm.password"
                      :type="passwordType"
                      placeholder="请输入密码"
                      name="password"
                      tabindex="2"
                      auto-complete="on"
                      @keyup.enter.native="handleLogin"
                      class="inputText"
                    />
                    <span class="show-pwd" @click="showPwd">
                      <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
                    </span>
                  </el-form-item>
                <div class="login_btn">
                  <el-button :loading="loading" type="primary" class="loginbtn" title="登 录" @click.native.prevent="handleLogin">登 录</el-button>
                </div>
                <div class="third_login">
                        
                </div>
              </div>
              <!-- 刷脸登录 -->
              <div class="login_con" v-show="cur==1">
                <div class="login_conwrap">
                  <div class="login_btn">
                    <!-- 请正对摄像头，眨眨眼，缓慢摇头。 -->
                    <el-button :loading="loading" type="primary" class="loginbtn" title="刷脸登录">刷脸登录</el-button>
                  </div>
                </div>
              </div>
              <!-- CA登录 -->
              <div class="login_con" v-show="cur==2">
                <div class="login_conwrap">
                  请插入USBKEY后，点击登录  <a href="#" class="btn">客户端下载</a>
                </div>
                <div class="login_btn">
                  <el-button :loading="loading" type="primary" class="loginbtn" title="CA登录">CA登录</el-button>
                </div>
              </div>
                
              <div class="login_bot">
                <a href="#"><i class="third_icon third_alipay"></i>支付宝</a>
                <a href="#"><i class="third_icon third_weixin"></i>微信</a>
                <a href="javascript:;" @click="cur=2" :class="{on:cur==2}"><i class="third_icon third_cakey"></i>CA登录</a>
              </div>
            </div>
        </div>
      </div>
      <div class="login_footer">
        <div class="wrapper">
          <div class="footer_text">版权所有：Vue Element  技术支持：Vue Element  客服热线：400-6655-9901</div>
        </div>
      </div>
    </div>

    <right-panel><!--  v-if="loginskinSwitch"-->
        <Loginskins />
    </right-panel>
  </el-form>

</template>
<script>
import { validUsername } from '@/utils/validate'
import RightPanel from '@/components/RightPanel'
import { Loginskins } from './components'
import { mapState } from 'vuex'
import '@/assets/logins/login.scss'

export default {
  name: 'Login',
  components: {
    RightPanel,
    Loginskins,
  },
  computed: {
    ...mapState({
      loginskinSwitch: state => state.settings.loginskinSwitch,
    })
  },
  data() {
    window.document.documentElement.setAttribute('class', 'login00');
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      cur:0 //默认选中第一个tab
    }
  },
  watch: {
    // $route: {
    //   handler: function(route) {
    //     this.redirect = route.query && route.query.redirect
    //   },
    //   immediate: true
    // }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  }
}
</script>
<!--<link rel="stylesheet" name="theme" href="@/assets/logins/login01/login.css">-->
<!--<style id="logintheme" src="@/assets/logins/login.scss"></style>-->