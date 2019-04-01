

<template>
	<div>
		<div class="panel panel-default">
  <!-- Default panel contents -->
  <div class="panel-heading">Panel heading</div>
  <div class="panel-body">
    <div v-for="item in course_list">
      <!--<img src="{{item.course_img}}" alt="">-->
      <div>
        <router-link :to="{name:'detail',params:{id:item.id}}">{{item.title}}</router-link>
        {{item.level}}</div>
    </div>
  </div>
	</div>
    </div>

</template>



<script>



export default{
	name:'course',
	data(){
		return {
			course_list:[],

		}
	},

  methods:{
	    initData(){
	      var that=this
	      this.$axios.request({
            url:'http://127.0.0.1:8889/course/',
            method: 'GET',
        }).then(function (ret) {
           if(ret.data.code===1001){
             that.course_list=ret.data.data
             console.log(ret.data.data)
           }
        }).catch(function (ret) {

        })
      }
  },
  mounted(){
	  this.initData()
  },

}





  
</script>




<style scoped>
  

</style>
