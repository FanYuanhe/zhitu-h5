
## 教师列表
**简要描述：**

- 教师筛选列表

**请求URL：**
- ` http://xx.com/api/teacher/s `

**请求方式：**
- GET

**参数：**

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |是  |string | 用户秘钥   |
|subject     |否  |string | 科目    |
|grade     |否  |string | 年纪    |
|type     |否  |string | 类型    |

 **返回示例**

```
  {
    "error_code": 0,
    "message": "success",
    "data": {
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
     "condition": {
      	   "subject": [
      	    {
      	      "id" : 1,
      	      "name" : "",
   	    	  "icon" : ""
         	}
         ],
         "grade": [
      	    {
      	      "id" : 1,
      	      "name" : "",
   	    	  "icon" : ""
         	}
         ]
      	  "type": [
      	    {
      	      "id" : 1,
      	      "name" : "",
   	    	  "icon" : ""
         	}
         ]
      }
    }
  }
```

 **返回参数说明**

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|groupid |int   |来源类型 1:大学生 2:编制内教师 3:职业教师  |
|condition |obj   |所有筛选项  |

***


## 教师详情
**简要描述：**

- 教师详情页

**请求URL：**
- ` http://xx.com/api/teacher/info `

**请求方式：**
- GET

**参数：**

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|app_key |是  |string |app标识   |
|access_token |是  |string | 用户秘钥   |
|id     |是  |string | 教师id    |

 **返回示例**

```
  {
    "error_code": 0,
    "message": "success",
    "data": {
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
          "price" : "100",
          "intro" : "",     
          "teacher_case" : [
          	 {
          	    "title" : "",
          	    "content" : "",
          	    "start_time" : "",
          	    "end_time" : "",
          	 }
          ],
          "teacher_experience" : [
             {
          	    "title" : "",
          	    "content" : "",
          	    "start_time" : "",
          	    "end_time" : "",
          	 }
          ],     
          "comments" : [
          	 {
          	    "id" : "",
          	    "title" : "",
          	    "content" : "",
          	    "user_id" : "",
          	    "user" : {
          	       "id" : "",
          	       "name" : "",
          	       "image" : "",
          	    },
          	    "create_time" : "2017-11-26 11:12:24",
          	    "course_id" : "",
          	 }
          ],       
        }
      ],
    }
  }
```

 **返回参数说明**

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|groupid |int   |来源类型 1:大学生 2:编制内教师 3:职业教师  |
|condition |obj   |所有筛选项  |
|teacher_case |array   |成功案例  |
|teacher_experience |array   |教学经验  |
|comments |array   |评论  |
