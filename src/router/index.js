import Vue from 'vue'
import Router from 'vue-router'
import Vcontent from '@/components/Vcontent'
import Vcourse from '@/components/Vcourse'
import Vnews from '@/components/Vnews'
import Vmicro from '@/components/Vmicro'
import Vdetail from '@/components/Vdetail'
import Vlogin from '@/components/Vlogin'

Vue.use(Router)

	
export default new Router({
  routes: [
    
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
		path:'/detail/:id',
		component:Vdetail,
		name:'detail'
		},
    {
		path:'/micro',
		component:Vmicro,
		name:'micro'
		},
    {
		path:'/login',
		component:Vlogin,
		name:'login'
		},
],
	mode:'history',
      })
      
 
