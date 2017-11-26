
## 验证码相关
**简要描述：**

- 发送验证码

**请求URL：**
- ` http://xx.com/api/cmn/sms/send `

**请求方式：**
- POST

**参数：**

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |否  |string | 用户秘钥   |
|phone     |是  |string | 手机号    |
|code_type     |是  |int | 验证码类型 1=注册；2=修改密码    |

 **返回示例**

```
  {
    "error_code": 0,
    "message": "success",
    "data": 'ZC1552688403887217'
  }
```

 **返回参数说明**

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|data |string   |验证码编号，用于验证验证码  |

***


**简要描述：**

- 验证验证码

**请求URL：**
- ` http://xx.com/api/cmn/sms/validate `

**请求方式：**
- GET

**参数：**

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |否  |string | 用户秘钥   |
|verification_code     |是  |string | 用户填写的验证码    |
|code_no     |是  |string | 验证码编号    |

 **返回示例**

成功
```
  {
    "error_code": 0,
    "message": "success",
    "data": true
  }
```
失败
```
  {
    "error_code": 0,
    "message": "验证码已失效",
    "data": false
  }
```
```
  {
    "error_code": 0,
    "message": "验证码错误",
    "data": false
  }
```
 **返回参数说明**

|参数名|类型|说明|
|:-----  |:-----|-----                           |





