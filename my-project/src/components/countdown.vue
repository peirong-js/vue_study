<template>
	<p :style="{color: col}">{{time}}</p>
</template>


<script>
	export default{
		data(){
			return{
				time: 10
			}
		},
		mounted(){
			var vm = this;
			var t = setInterval(function(){
				vm.time--;
				if(vm.time == 0){					
					clearInterval(t);
					vm.$emit("end");  //结束时触发自定义end事件
				}
			},1000)
		},

		//接收传过来的属性值col，通过:style="{color: col}" 应用到P标签中
		props:{
			col:{
				type: String,
				default: '#000'
			}
		}
	}
</script>