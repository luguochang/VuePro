<template>
  <div id="app">
    <Vheader></Vheader> 
    
    
    <router-view/>
  </div>
</template>

<script>
  
import Vheader from '@/components/Vheader'


export default {
  name: 'App',
  components:{
    Vheader,

  },


  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  

}

</style>
