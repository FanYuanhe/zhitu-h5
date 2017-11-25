
### 注意： 所有接口都要传两个参数 app_key，access_token


## 首页
**简要描述：** 

- 首页接口

**请求URL：** 
- ` http://xx.com/api/index `
  
**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |是  |string | 用户秘钥   |

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
      "banner":[
      	{
      	  "url": "",
      	  "img" :"",
      	}
      ],
      "teacher" : [
        {
          "id" : 1,
          "name" : "",   
          "image" : "",   
          "subject" : ["数学"],     
          "grade" : ["初一","初二"],   
          "school" : "",
          "source" : 1,   
          "is_confirm" : ,   
          "teach_time" : 10,        
        }
      ],
      "subjects":[
      	 {
      	    "id" : 1,
      	    "name" : "",
      	    "icon" : "",
      	 }
      ]
    }
  }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|source |int   |来源类型 1:大学生 2:编制内教师 3:职业教师  |








