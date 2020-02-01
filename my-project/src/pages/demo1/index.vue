<template>
	<div>
		hello World
	</div>
</template>

<!--      生命周期      -->
<script>
  export default{
    data(){
      return{

      }
    },

    //组件生成时自动调用生命周期函数
    beforeCreate(){
		console.log("beforeCreate")
	},
	created(){
		console.log("created")
	},
	beforeMount(){
		console.log("beforeMount")
	},
	mounted(){
		console.log("mounted")
	}
  }

</script>