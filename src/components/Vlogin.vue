<template>
<div>
<div>
    <h1>用户登录</h1>
    <!--<div>-->
      <!--<p>-->
        <input placeholder="请输入用户名" >
      <!--</p>-->
      <!--<p>-->
        <!--<input type="password" placeholder="请输入密码"  v-model="password">-->
      <!--</p>-->
      <!--<input type="button" value="登录" @click="doLogin">-->
    <!--</div>-->
  </div>



  </div>
</template>
<script>
  export default {
    name:'Vlogin',
    data(){
      return {
        username:'',
        password:'',
      }
    },
    mounted(){
    },
    methods:{
      submitDate(){
        var that=this
        this.$axios.request({
        url:'127.0.0.1:8889/login/',
        data:{user:that.user,
        pwd:that.pwd},
        method:'POST'
      }).then(function (args) {
        console.log(args)
          if(args.data.code===1001){
            alert(123)
          }

        })
      }
    }
  }
</script>
<style scoped></style>
