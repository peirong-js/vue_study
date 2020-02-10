<template>
	<div>
		<div>vue-router</div>
		<div class="describe">
			两种跳转方式：<br>
			1. router-link :to="{...}"<br>
			2. this.$router.push(...)<br>
		</div>
		<div>-------------------------------------</div>

		<router-link to="/demo8">to demo8</router-link>

		<div>-------------------------------------</div>
		<!-- http://localhost:8080/#/demo9/456-->
		http://localhost:8080/#/demo9/456<br>
		<router-link :to="{ name: 'demo9', params: { userId: 456 }}">params</router-link>
		

		<div>-------------------------------------</div>	
		<!-- http://localhost:8080/#/demo9/456?plan=private -->
		http://localhost:8080/#/demo9/456?plan=private<br>
		<router-link :to="{ name: 'demo9', params: { userId: 456 }, query: { plan: 'private' }}">query</router-link>


		<div>-------------------------------------</div>

		<button @click="toURL">跳转页面</button>


	</div>
	<!-- 官网  https://router.vuejs.org/zh-cn/ -->

	

	

</template>

<script>
	export default{
		data(){
			return{

			}
		},
		methods:{
			toURL(){
				// this.$router.push({ path: '/demo8' })

				 //this.$router.push({ name: 'demo9', params: { userId: 123 }})
				 
				this.$router.push({ name: 'demo9', params: { userId: 123 }, query: { plan: 'private' } }) 
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