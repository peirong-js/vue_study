<template>
	<div>
		<div>计算属性</div>
		<div>-------------------------------------------</div>
		<div class="describe">在模板中放入太多的js逻辑会让模板过重且难以维护，在计算属性下所有函数可以放到computed中（计算属性是不接受额外的参数的，是依赖于data属性中的变量）</div>
		<div>{{reversedMessage}}</div>

	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg : 'helloworld'
			}
		},
		computed:{
			//反转字母
			reversedMessage(){
				return this.msg.split('').reverse().join('')
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