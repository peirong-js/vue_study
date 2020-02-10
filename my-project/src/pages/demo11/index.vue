<template>
	<div>
		<div>Vue中DOM操作</div>
		<div class="describe">
			1.Vue中DOM操作都要在mounted下进行<br>
			2.mounted是在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作,可以理解为dom节点渲染成功之后再做获取参数<br>
			3.$refs是vue提供的一个属性，可以通过this.$refs.对应的是ref的值，获取生成的DOM元素。示例：this.$refs.head可以获取ref值为head的DOM元素<br>
		</div>
		<div>--------------------------------------</div>

		<div ref="head" id="head"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		//mounted是在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作,可以理解为dom节点渲染成功之后再做获取参数
		mounted(){
			// DOM已经生成，$refs是vue提供的一个属性，可以通过this.$refs.对应的是ref的值，获取生成的DOM元素。示例：this.$refs.head可以获取ref值为head的DOM元素
			this.$refs.head.innerHTML = 'helloworld';
		}
	}
</script>

<style type="text/css">
	.describe{
    font-size: 12px;
    color:gray;
  }
</style>