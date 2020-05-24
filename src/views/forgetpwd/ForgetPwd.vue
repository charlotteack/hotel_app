<template>
  <transition name="slide">
    <div class="forgetpwd" :style="{'background-image':bgImg}">
      <h1>密码找回</h1>
      <van-cell-group class="forgetpwd-from">
        <van-field v-model="username" clearable border label="邮箱" placeholder="请输入邮箱" :error-message="usernameErr" />
        
        <van-row>
          <van-col span="16">
            <van-field v-model="code" clearable border label="验证码" placeholder="验证码" :error-message="codeErr" />
          </van-col>
          <van-col span="8" class="codeCol">
            <van-button type="default" size="small" @click="getCode" :disabled="mailBtnStatus">{{mailBtnText}}</van-button>
          </van-col>
        </van-row>
        
        <van-field v-model="password" clearable border type="password" label="密码" placeholder="请输入密码" :error-message="passwordErr" />
        
        <van-cell>
          <van-row>
            <van-col span="24" class="btn">
              <van-button type="default" size="small" @click="updatePwd" :loading="loading">修改密码</van-button>
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
import { updatePassword,sendEmail } from '@/network/login';
import { Toast,Button as VanButton,Cell as VanCell,CellGroup as VanCellGroup,Col as VanCol,Row as VanRow,Field as VanField } from 'vant';

export default {
  data() {
    return {
      username: '',
      password: '',
      code: '',
      usernameErr: '',
      passwordErr: '',
      codeErr: '',
      loading: false,
      sendMailPerTime: 60,//每次邮件发送间隔时间
      mailBtnStatus: false,//发送邮件按钮
      mailTimeInterval: null,
      mailBtnText: '发送验证码',
      mailCode: ''
    };
  },
  components: {
    VanButton,
    VanCell,
    VanCellGroup,
    VanCol,
    VanRow,
    VanField
  },
  props: {

    bgImg: {
      type: String,
      default: 'url('+require('@/assets/image/login/login_background.jpeg')+")"
    }

  },
  methods: {
    changeMailBtn(){
        this.sendMailPerTime--;
        if(this.sendMailPerTime <= 0){
          clearInterval(this.mailTimeInterval);
          this.mailBtnText = '重新获取';
          this.mailBtnStatus = false;
          this.sendMailPerTime = 60;
        }else{
          this.mailBtnText = `${this.sendMailPerTime}秒后重新获取`;
          this.mailBtnStatus = true;
        }
      },
    getCode() {
      if(emailCheck(this.username)){
          this.mailTimeInterval = setInterval(()=>{
            this.changeMailBtn();
          },1000)

          let params = new URLSearchParams();
          params.append('email',this.username);

          sendEmail(params).then(res => {
            if(res.data.code === 200){
              Toast.success('验证码发送成功');
              this.mailCode = res.data.mailCode
            }else{
              Toast.fail('发送失败，请稍后再试');
            }
          }).catch(err => {
            Toast.fail('发送失败，请稍后再试');
          })
        }else{
          this.usernameErr = '邮箱格式不正确';
        }
    },
    updatePwd() {
      this.usernameErr = '';
      this.passwordErr = '';
      this.codeErr = '';
      this.loading = true;
      if (!emailCheck(this.username)) {
        this.usernameErr = '邮箱格式不正确';
        this.loading = false;
        return;
      }
      if (this.code !== this.mailCode) {
        this.codeErr = '验证码错误';
        this.loading = false;
        return;
      }
      if (!pwdCheck(this.password)) {
        this.passwordErr = '密码格式不正确';
        this.loading = false;
        return;
      }
      
      updatePassword({ username: this.username, password: aesEncrypt(this.password, 'timelyHotelLogin') })
        .then(res => {
          if (res.status === 200) {
            this.loading = false;
            Toast.success('修改成功，正在跳转登陆界面');
            setTimeout(() => {
              Toast.clear();
              this.$router.push('/login');
            }, 1000);
          } else {
            this.loading = false;
            Toast.fail(res.msg);
          }
        })
        .catch(error => {
          Toast.fail(error);
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped>
  .forgetpwd{
    width: 100%;
    height: 100%;
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden
  }
    
  h1{
    margin-top: 40%
  }
      
  .forgetpwd-from{
    width: 80%;
    text-align: center;
    padding: 10px;
    margin: 0 auto;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.19)

  }
  
  .forgetpwd-from .btn{
    text-align: center;
    margin-top: 10px;
  }

  .slide-enter-active, .slide-leave-active{
  transition: all 0.5s
  }

  .slide-enter, .slide-leave-to{
    opacity: 0;
    transform: translate3d(100%, 0, 0)
  }

  .codeCol{
    padding: 10px 0 0;
  }
  
</style>
