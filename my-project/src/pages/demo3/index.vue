<template>
	<div>
		<div>模板语法</div>
		<div>-----------------------------------------</div>
		<div>
			data: {{msg}}
		</div>

		<div>------------------------------------------</div>

		<div>{{ number + 1 }}</div>

		<div>------------------------------------------</div>
		<!-- 指令v-html：把绑定的标签变成div的子元素-->
		<div class="describe">指令v-html：把绑定的标签变成div的子元素</div>
		<div v-html="rawHtml"></div>
		<div>------------------------------------------</div>
		<div class="describe">指令v-bind:class：动态绑定元素class属性</div>
		<div v-bind:class="red"></div>
		<div class="describe">指令v-on：绑定事件</div>
		<div v-on:click="say('hi')">点击我</div>

		<div>------------------------------------------</div>

		<!--简写方式-->
		<div @click="change">修改颜色</div>

		<div>-------------------------------------------</div>
		<!--过滤器，输出capitalize定义的-->
		<div> {{ message | capitalize }} </div>

		

	</div>
</template>
<script>	
	export default{
		data(){
			return {
				msg: '数据绑定',
				number: 5,
				rawHtml: '<span>123</span>',
				red: 'red active',
				message:'message'
			}
		},
		methods:{
			change(){
				this.red='blue';
			},
			say(h){
				alert(h);
			}
		},

		//过滤器
		filters:{
			capitalize(){
				return '123';
			}
		}
	}
</script>

<style type="text/css">
	.describe{
    font-size: 12px;
    color:gray;
  }
</style>
