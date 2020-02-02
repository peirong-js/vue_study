import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' //路径，@代表src目录
import demo1 from '@/pages/demo1'
import demo2 from '@/pages/demo2'
import demo3 from '@/pages/demo3'
import demo4 from '@/pages/demo4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',	//页面地址栏路径
      name: 'HelloWorld',
      component: HelloWorld   //页面名称，通过上面的import导入
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: demo3
    },
    {
      path: '/demo4',
      name: 'demo4',
      component: demo4
    }
  ]
})
