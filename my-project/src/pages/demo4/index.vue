<template>
	<div>
		<div>计算属性</div>
		<div>-------------------------------------------</div>
		<div style="font-size: 12px;color:gray">在模板中放入太多的js逻辑会让模板过重且难以维护，在计算属性下所有函数可以放到computed中</div>
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