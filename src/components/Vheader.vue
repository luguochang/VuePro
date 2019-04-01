<template>
  <nav class="navbar navbar-default .navbar-fixed-top">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      
      <a class="navbar-brand" href="#">个人页面</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li v-for='(item,index) in routes' :class="{active:index==currentIndex}" @click='activeHandler(index)'><router-link :to="item.path">{{item.name}} </router-link></li>
        


      </ul>
      <span class="navbar-brand pull-right"><router-link :to="{name:'login'}">登陆</router-link></span>

      
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>



<script>

import Vcontent from '@/components/Vcontent'
import Vcourse from '@/components/Vcourse'
import Vnews from '@/components/Vnews'
import Vmicro from '@/components/Vmicro'




export default{
    name:'Vheader',
    
    data(){
    return{
      currentIndex:0,
      routes:  [
    
      {
    path:'/',
    component:Vcontent,
    name:'main'
    },
    {
    path:'/course',
    component:Vcourse,
    name:'course'
    },
    {
    path:'/news',
    component:Vnews,
    name:'news'
    },

    {
    path:'/micro',
    component:Vmicro,
    name:'micro'
    },
],
    }
  },
    created(){
    for (var i=0;i<this.routes.length;i++){
      if(this.routes[i].path==this.$route.path){
        this.currentIndex=i;
        return ;
      }
    }
  },
  methods:{
    activeHandler(index){
      this.currentIndex=index;
    }
  }
    
  }
  
  
</script>

<style scoped>

</style>
