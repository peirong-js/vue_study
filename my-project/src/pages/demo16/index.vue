<template>
	<div>
		<div>vue-resource请求</div>

		<div class="describe">
		安装：cnpm install vue-resource --save <br>
		1、在main.js中引用，并被全局使用 <br>
		引入：import VueResource from 'vue-resource'; <br>
		全局使用：Vue.use(VueResource); <br>
		2、数据请求方式get/post(并带参数）<br>
		</div>
		<div>-----------------------------------------</div>
		<!-- https://github.com/pagekit/vue-resource -->
		<img src="@/pages/demo16/resource-img.jpg">


	</div>
</template>


<script>
	export default{
		data(){
			return{

			}
		},
		mounted(){
			this.$http.get('/someUrl').then(response => {
		    	
		    	console.log(response.body);
		  	}, response => {
		    	// error callback
		  	});


		  	this.$http.post('/someUrl', {foo: 'bar'}).then(response => {
		    	console.log(response.body);
		  	}, response => {
		    	// error callback
		  	});


		  	// GET /someUrl?foo=bar
			this.$http.get('/someUrl', {params: {foo: 'bar'}, headers: {'X-Custom': '...'}}).then(response => {
			    // success callback
			}, response => {
			    // error callback
			});
		}
	}
</script>

<style type="text/css">
	.describe{
    font-size: 12px;
    color:gray;
  }
</style>