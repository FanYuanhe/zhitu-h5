<template lang="html">
  <div class="login">
    <div v-if="isShowLoginbox" class="login-box">
      <input type="text" name="" value="" placeholder="请输入手机号" v-model="phone">
      <div class="code-box">
        <span @click="getCode" class="code-text" :class="isGetCode?'get-code-selected':''">{{ codeText }}</span>
        <input v-model="code" value="" type="text" name="" placeholder="请输入验证码">
      </div>
      <div class="role-select">
        <button @click="roleSelect" class="role-btn" :class="selectRole?'role-btn-selected':''" type="button" name="button">我是家长/学生</button>
        <button @click="roleSelect" class="role-btn" :class="selectRole?'':'role-btn-selected'" type="button" name="button">我是教师</button>
      </div>
      <button @click="loginFunc" class="login-btn" type="button" name="button">登录</button>
      <p class="info">登录即代表同意《知途家教》相关规定</p>
    </div>
    <div v-if="isShowSetPassword == 1" class="set-password">
      <input v-model="password" type="password" name="" value="" placeholder="请输入密码">
      <button @click="setPassword" class="login-btn" type="button" name="button">确认密码</button>
      <p class="info">登录即代表同意《知途家教》相关规定</p>
    </div>
  </div>
</template>

<script>
import publicFunc from '../../static/js/public'
import { Toast } from 'mint-ui'
export default {
  name: 'FastLogin',
  data () {
    return {
      isShowSetPassword: 0,
      isShowLoginbox: true,
      codeText: '获取验证码',
      isGetCode: false,
      phone: '',
      selectRole: true,
      roleType: 1,
      codeNo: '',
      code: '',
      password: '',
      timer: 60,
      token: '',
      id: publicFunc.getQueryStr('id'),
      from: publicFunc.getQueryStr('from')
    }
  },
  mounted () {

  },
  methods: {
    getCode () {
      const that = this;
      if (!that.isGetCode) {
        if (that.phone.length < 11) {
          Toast({
            message: '手机号码有误',
            position: 'middle',
            duration: 2000
          });
          return false;
        };
        that.axios({
          url: '/api/cmn/sms/send',
          method: 'post',
          data: {
            phone: that.phone,
            code_type: 1
          }
        }).then((res) => {
          if (res.data.error_code === 0) {
            that.cutDownTime();
            that.codeNo = res.data.data;
          } else {
            Toast({
              message: res.data.message,
              position: 'middle',
              duration: 2000
            });
          };
        })
      }
    },
    cutDownTime () {
      const that = this;
      const cutTimer = setInterval(() => {
        if (that.timer === 0) {
          that.isGetCode = false;
          that.timer = 60;
          that.codeText = '获取验证码';
          clearInterval(cutTimer);
        } else {
          that.timer--;
          that.isGetCode = true;
          that.codeText = `${that.timer}秒内有效`;
        }
      }, 1000)
    },
    setPassword () {
      const that = this;
      if (that.password === '') {
        Toast({
          message: '密码不能为空',
          position: 'middle',
          duration: 2000
        });
        return false;
      }
      that.axios({
        url: '/api/user/firstSetPassword',
        method: 'post',
        data: {
          newPass: that.password
        },
        headers: {
          'access-token': that.token
        }
      }).then((res) => {
        if (res.data.error_code === 0) {
          Toast({
            message: '密码设置成功',
            position: 'middle',
            duration: 2000
          });
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
    },
    roleSelect () {
      this.selectRole = !this.selectRole;
      if (this.selectRole) {
        this.roleType = 1;
      } else {
        this.roleType = 2;
      }
    },
    loginFunc () {
      const that = this;
      if (that.phone.length < 11) {
        Toast({
          message: '手机号码有误',
          position: 'middle',
          duration: 2000
        });
        return false;
      };
      if (that.code === '') {
        Toast({
          message: '验证码不能为空',
          position: 'middle',
          duration: 2000
        });
        return false;
      };
      that.axios({
        url: '/api/user/fastLogin',
        method: 'post',
        data: {
          phone: that.phone,
          role_type: that.roleType,
          code_no: that.codeNo,
          code: that.code
        }
      }).then((res) => {
        if (res.data.error_code === 0) {
          localStorage.setItem('zt_data', JSON.stringify(res.data.data));
          that.isShowSetPassword = res.data.data.setpass;
          that.isShowLoginbox = false;
          that.token = res.data.data.token;
          if (that.isShowSetPassword === 0) {
            if (this.id !== '' && this.from !== '') {
              location.href = `#/teacher_detail/${that.id}`;
            } else {
              location.href = '#/public_personal_center'
            }
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
  .login-btn {
    width: 94%;
    margin-left: 3%;
    background-color: #2ebd51;
    font-size: Rem(15);
    color: #fff;
    border: none;
    outline: none;
    height: Rem(50);
    margin-top: Rem(10);
  }
  .info {
    font-size: Rem(12);
    text-align: center;
    color: #bcbcbc;
    margin-top: Rem(10);
  }
  .code-box {
    position: relative;
  }
  .code-text {
    position: absolute;
    top: Rem(15);
    right: 3%;
    font-size: Rem(15);
    color: #2ebd51;
  }
  .get-code-selected {
    color: #eaeaea;
  }
  .role-select {
    width: 96%;
    margin: Rem(10) 3% 0 3%;
    font-size: 0;
    .role-btn {
      width: 47%;
      color: #bcbcbc;
      font-size: Rem(14);
      border: 1px solid #cecece;
      outline: none;
      background: #fff;
      height: Rem(50);
    }
    .role-btn-selected {
      background-color: #2ebd51;
      color: #fff;
      border: 1px solid #2ebd51;
    }
    .role-btn:nth-of-type(1) {
      margin-right: 4%;
    }
  }
</style>
