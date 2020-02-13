<template>
	<div>
		<div>Slot插槽</div>
		<div class="describe">
			slot插槽----用于组件调用<br>
			1、在components中创建要导入的组件，组件中插入"< slot>< /slot>"标签；父文件通过import导入（文件名不能为sloat,此为关键字），再通过components注册，标签使用文件名引入（如：< slots>< /slots>）<br>
			2、引入标签< slots>< /slots>中的内容会自动添加到组件模板中的插槽< slot></ slot>标签内；若组件中无插槽标签则无任何效果；<br>
			3、若组件模板中有多个插槽< slot></ slot>，想将父文件中的其中一个内容放入模板中指定的插槽；<br>
			1）组件插槽< slot name=“XX”>< /slot>----name属性命名；<br>
			2）引入标签< slots></ slots>中，想放入的内容 通过slot=" XX",指定放入到相同名字的插槽中；<br>
		</div>
		<div>-------------------------------------</div>

		<slots>
			<div>123</div>
			<p>234</p>

			<p>666</p>

			<p slot="bottom">888</p>
		</slots>
	</div>
</template>

<script>

	import slots from '@/components/slot.vue';

	export default{
		data(){
			return{

			}
		},
		components:{
			slots
		}
	}
</script>

<style type="text/css">
	.describe{
    font-size: 12px;
    color:gray;
  }
</style>