<template>
	<div>
		<div>选项/数据</div>
		<div>----------------------------------------------</div>
		<div style="font-size: 12px;color:gray">data: 全局组件变量定义，定义的变量可以渲染到模板上（数据绑定），用{{}}输出</div>
		<div>data: {{msg}}</div>
		<div>----------------------------------------------</div>
		<div style="font-size: 12px;color:gray">computed: 模板中可以绑定函数，定义到computed中</div>
		<div>computed: {{aDouble}}</div>
		<div>----------------------------------------------</div>
		<div style="font-size: 12px;color:gray">methods: 绑定事件，触发函数</div>
		<div @click="say('hi')">methods:点击我</div>
	</div>
</template>
<script>
	export default {
	//data: 全局组件变量定义，定义的变量可以渲染到模板上（数据绑定），用{{}}输出
		data () {
		    return {
		        msg: 'Welcome to Your Vue.js App',
		        num: 1
		    }
	    },
	//computed对象，可以定义各种函数
	    computed:{
	    	aDouble(){
	    		return this.num*2; //this指全局对象，在data中定义
	    	}
	    },
	//methods定义的函数给事件用的，绑定事件，触发函数
	    methods: {
	    	say(h){
	    		alert(h);
	    	}
	    }
	}
</script>