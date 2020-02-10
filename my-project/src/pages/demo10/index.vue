<template>
	<div>
		<div>自定义组件</div>
		<div>--------------------------------</div>
		<div class="describe">
			- 组件写到components文件夹下<br>
			- 组件基本要素：props（接收属性值） 、$emit（自定义触发事件）等<br>
			- 通过import将组件引入到页面中<br>
			- 通过components注册组件<br>
		</div>
		<!-- 标签的形式引入 -->
		<count-down col="blue" @end="ending"></count-down>
	</div>
</template>


<script>
	//import引入组件
	import countdown from '@/components/countdown.vue'

	export default{
		data(){
			return{

			}
		},
		methods:{
			ending(){
				alert("已经结束了")
			}
		},
		//注册
		components:{
			'count-down':countdown
		}
	}
</script>

<style type="text/css">
	.describe{
    font-size: 12px;
    color:gray;
  }
</style>