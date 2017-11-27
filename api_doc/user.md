
## 用户相关
**简要描述：**
- 注册

**请求URL：**
- ` http://xx.com/api/user/register `

**请求方式：**
- POST

**参数：**

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |否  |string | 用户秘钥   |
|phone     |是  |string | 手机号    |
|password     |是  |string | 密码|

 **返回示例**

```
  {
    "error_code": 0,
    "message": "success",
    "data": true
  }
```

 **返回参数说明**

|参数名|类型|说明|
|:-----  |:-----|-----                           |
