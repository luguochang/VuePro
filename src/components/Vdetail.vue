<template>
  <div class="panel panel-default col-md-10">
  <div class="panel-heading">
    <h3 class="panel-title">我的博客</h3>
  </div>
  <div class="panel-body">
    <div>
      <p>{{courseDetail.title}}</p>
      <p>{{courseDetail.course_img}}</p>
      <p>{{courseDetail.level}}</p>
      <p>{{courseDetail.why}}</p>

        <h3>推荐课程</h3>
    <div v-for="course in courseDetail.recommend">
      <p><a @click="initData(course.id)" >{{course.title}}</a></p>
    </div>
    <h3>章节</h3>
    <div v-for="chapter in courseDetail.chapter">
      <p>{{chapter.name}}</p>
    </div>
    </div>


  </div>
</div>
</template>
<script>
  export default {
    name:'Vdetail',
    data(){
      return {
        courseDetail:{
          title:null,
          course_img:null,
          level:null,
          why:null,
          recommend:null,
          chapter:null,
        },

      }
    },
    mounted(){
      var id=this.$route.params.id
      this.initCourseDetail(id)


    },
    methods:{

      initData(id){
        this.initCourseDetail(id)
        this.$route.push({name:'detail',params: {id:id}})
      },

      initCourseDetail(nid){
        var that=this

        this.$axios.request({

          url:'http://127.0.0.1:8889/course/'+nid+'/',
          methods: 'get',

        }).then(function (args) {
            if(args.data.code===1001){

              that.courseDetail=args.data.data
            }else{
              alert(args.data.error)
            }
          
        })
      },
    }
  }
</script>
<style scoped></style>
