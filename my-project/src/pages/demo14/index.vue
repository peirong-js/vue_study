<template>
	<div>
		<div>状态管理vuex</div>

		<div class="describe">
			1.全局状态管理，所有页面共享数据<br>
			2.npm install 引入vuex包 ；指令安装：cnpm install vuex --save<br>
			3.src文件夹中创建新的文件如store夹，stroe文件夹中创建文件<br>
			4.在main.js中导入Vuex: import store from './store/' ; new Vue{ }中添加store;<br>
			5.修改数据：this.$store.dispatch('inc',1000000);<br>
			6.获取数据：this.$store.state.num;<br>
		</div>
		<div>--------------------------------------</div>

		<div>{{msg}}</div>

		<button @click="change">change</button>

	</div>
	<!-- https://vuex.vuejs.org/zh -->
</template>

<script>
	export default{
		data(){
			return{
				msg: '123',
			}
		},
		methods:{
			change(){
				// vuex取数据
				// this.msg = this.$store.state.count;

				// 修改公共数据
				this.$store.dispatch('inc', 100000);
				this.msg = this.$store.state.num;
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