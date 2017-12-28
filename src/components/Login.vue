<template lang="html">
  <div class="login">
    <input v-model="phone" type="text" name="" value="" placeholder="请输入手机号">
    <input v-model="password" type="password" name="" value="" placeholder="请输入密码">
    <button @click="loginFunc" type="button" name="button">登录</button>
    <p class="info">登录即代表同意《知途家教》相关规定</p>
    <p class="login-box">
      <span @click="goLogin">没有账号？快捷登录</span>
      <router-link :to="{ name: '', params: {} }">
        <span class="forget-pass">忘记密码</span>
      </router-link>
    </p>
  </div>
</template>

<script>
import publicFunc from '../../static/js/public'
import { Toast } from 'mint-ui'
export default {
  name: 'Login',
  data () {
    return {
      phone: '',
      password: '',
      id: publicFunc.getQueryStr('id'),
      from: publicFunc.getQueryStr('from')
    }
  },
  mounted () {

  },
  methods: {
    goLogin () {
      if (this.id !== '' && this.from !== '') {
        location.href = `#/fastlogin?id=${this.id}&from=${this.from}`;
      } else {
        location.href = '#/fastlogin';
      }
    },
    loginFunc () {
      let that = this;
      console.log(that.phone);
      if (that.phone.length < 11) {
        Toast({
          message: '手机号码有误',
          position: 'middle',
          duration: 2000
        });
        return false;
      };
      if (that.password === '') {
        Toast({
          message: '密码不能为空',
          position: 'middle',
          duration: 2000
        });
        return false;
      };
      that.axios({
        url: '/api/user/passwordLogin',
        method: 'post',
        data: {
          phone: that.phone,
          password: that.password
        }
      }).then((res) => {
        if (res.data.error_code === 0) {
          Toast({
            message: '登陆成功',
            position: 'middle',
            duration: 2000
          });
          localStorage.setItem('zt_data', JSON.stringify(res.data.data));
          if (this.id !== '' && this.from !== '') {
            location.href = `#/teacher_detail/${that.id}`;
          } else {
            location.href = '#/public_personal_center'
          }
        } else {
          Toast({
            message: res.data.message,
            position: 'middle',
            duration: 2000
          });
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'static/css/mixin';
  input {
    height: Rem(50);
    display: block;
    width: 95%;
    outline: none;
    border: none;
    padding-left: 5%;
    font-size: Rem(15);
  }
  input:nth-of-type(1) {
    border-bottom: 1px solid #eaeaea;
  }
  button {
    width: 94%;
    margin-left: 3%;
    background-color: #2ebd51;
    font-size: Rem(15);
    color: #fff;
    border: none;
    outline: none;
    height: Rem(50);
    margin-top: Rem(20);
  }
  .info {
    font-size: Rem(12);
    text-align: center;
    color: #bcbcbc;
    margin-top: Rem(10);
  }
  .login-box {
    width: 94%;
    padding: 0 3%;
    font-size: Rem(12);
    color: #565454;
    margin-top: Rem(15);
    span {
      text-decoration: underline;
    }
    .forget-pass {
      float: right;
    }
  }
</style>
