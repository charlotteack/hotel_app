<template>
  <transition name="slide">
    <div class="login" :style="{'background-image':bgImg}">
      <h1>登陆</h1>
      <van-cell-group class="login-from">
        <van-field v-model="username" clearable border label="邮箱" placeholder="请输入邮箱" :error-message="usernameErr" />
        <van-field v-model="password" clearable border type="password" label="密码" placeholder="请输入密码" :error-message="passwordErr" />

        <div>
          <van-row type="flex" justify="end">
            <van-col span="6">
              <a href="javascript:void(0)" @click="forgetPwd" class="forgetA">忘记密码</a>
            </van-col>
          </van-row>
        </div>

        <van-cell>
          <van-row>
            <van-col span="12" class="btn">
              <van-button type="info" size="small" @click="login" :loading="loading">登陆</van-button>
            </van-col>
            <van-col span="12" class="btn">
              <van-button type="default" size="small" @click="reg">注册</van-button>
            </van-col>
          </van-row>
        </van-cell>
      </van-cell-group>
    </div>
  </transition>
</template>

<script>
import MD5 from 'crypto-js/md5';
import { emailCheck, pwdCheck, aesEncrypt } from '@/common/util';
import { tryLogin } from '@/network/login';
import { Toast,Button as VanButton,Cell as VanCell,CellGroup as VanCellGroup,Col as VanCol,Row as VanRow,Field as VanField} from 'vant';

export default {
  components: {
    VanButton,
    VanCell,
    VanCellGroup,
    VanCol,
    VanRow,
    VanField

  },
  data() {
    return {
      username: '',
      password: '',
      usernameErr: '',
      passwordErr: '',
      loading: false,
      redirect: this.$route.query.redirect
    };
  },
  props: {

    bgImg: {
      type: String,
      default: 'url('+require('@/assets/image/login/login_background.jpeg')+")"
    }

  },
  mounted() {
    if (this.redirect) {
      Toast({
        position: 'bottom',
        message: '未登录或登陆过期，请重新登陆~'
      });
    }
  },
  methods: {
    login() {
      this.usernameErr = '';
      this.passwordErr = '';
      this.loading = true;
      if (!emailCheck(this.username)) {
        this.userNameErr = '邮箱格式不正确';
        this.loading = false;
        return;
      }
      if (!pwdCheck(this.password)) {
        this.passwordErr = '密码格式不正确';
        this.loading = false;
        return;
      }
      tryLogin({ username: this.username, password: aesEncrypt(this.password, 'timelyHotelLogin') })
        .then(res => {
          if (res.status === 200) {
            this.loading = false;
            this.$router.push('/home');
          } else {
            this.loading = false;
            Toast.fail(res.msg);
          }
        })
        .catch(error => {
          Toast.fail(error);
          this.loading = false;
        });
    },
    forgetPwd() {
      this.$router.push('/forget');
    },
    reg() {
      this.$router.push('/reg');
    }
  }
};
</script>

<style scoped>
.login{
  width: 100%;
  /* height: calc(100% - 49px - 44px); */
  height: 100%;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden
}

.login h1{
  margin-top: 40%
}
    

.login-from{
  width: 80%;
  text-align: center;
  padding: 10px;
  margin: 0 auto;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.19)

}
  
.login-from .btn{
  text-align: center;
  /* margin-top: 10px */
}
    

.slide-enter-active, .slide-leave-active{
  transition: all 0.5s
}
  

.slide-enter, .slide-leave-to{
  opacity: 0;
  transform: translate3d(100%, 0, 0)
}

.forgetA{
  font-size: 12px;
  color: #ccc;
}
 
</style>
