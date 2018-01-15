<template lang="html">
  <div class="about-zhitu">
   <div class="about-content">
     <div class="about-img">
       <img src="../../../static/img/logo_share.png" alt="">
     </div>
     <div class="about-tit">
       <p>
         知途家教汇集了众多有经验、有方法的有值老师，致力于搭建一个能让家长省心，放心的家教预约平台
         。旨在帮助学生和家长找到真正可靠的家教，让学生们学习起来更有方法，成绩提供不再是困难。
       </p>
     </div>
     <div class="about-list">
       <ul>
         <li>网站：www.zhituteam.com</li>
         <li>客服电话：15611004123</li>
         <li>微信公众号：知途家教</li>
       </ul>
     </div>
   </div>
  </div>
</template>

<script>
  export default {
    name: 'AboutZhitu'
  }
</script>

<style lang="scss" scoped>
  @import 'static/css/mixin';
  .about-content{
    .about-img {
      width: Rem(100);
      height: Rem(100);
      padding: Rem(50) Rem(140);
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .about-tit{
      padding: 0 Rem(20);
      font-size: Rem(16);
      margin-left: Rem(10);
      text-indent:Rem(36);
      color: #000;
    }
    .about-list{
      padding-top: Rem(50);
      font-size: Rem(16);
      width: 100%;
      ul{
        background: #fff;
        li{
          width: 100%;
          height: Rem(40);
          line-height: Rem(40);
          margin-left: Rem(20);
          border-bottom: 1px solid #d9d9d9;
        }
        li:nth-of-type(3){
          border: none;
        }
      }
    }
  }
</style>
