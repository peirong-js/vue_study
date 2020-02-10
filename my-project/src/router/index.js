import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' //路径，@代表src目录
import demo1 from '@/pages/demo1'
import demo2 from '@/pages/demo2'
import demo3 from '@/pages/demo3'
import demo4 from '@/pages/demo4'
import demo5 from '@/pages/demo5'
import demo6 from '@/pages/demo6'
import demo7 from '@/pages/demo7'
import demo8 from '@/pages/demo8'
import demo9 from '@/pages/demo9'
import demo10 from '@/pages/demo10'
import demo11 from '@/pages/demo11'
import demo12 from '@/pages/demo12'

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
    },
    {
      path: '/demo5',
      name: 'demo5',
      component: demo5
    },
    {
      path: '/demo6',
      name: 'demo6',
      component: demo6
    },
    {
      path: '/demo7',
      name: 'demo7',
      component: demo7
    },
    {
      path: '/demo8',
      name: 'demo8',
      component: demo8
    },
    {
      path: '/demo9',
      name: 'demo9',
      component: demo9
    },
    {
      path: '/demo10',
      name: 'demo10',
      component: demo10
    },
    {
      path: '/demo11',
      name: 'demo11',
      component: demo11
    },
    {
      path: '/demo12',
      name: 'demo12',
      component: demo12
    }
  ]
})
