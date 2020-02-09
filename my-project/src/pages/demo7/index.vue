<template>
  <div>
    <div>列表渲染</div>
    <div class="describe">
        v-for指令（循环）<br>
        用法1： v-for="item in items" 数组(item数组的每一项)<br>
        用法2： v-for="(item,index) in items" 数组（index数组的下标）<br>
        用法3： v-for="(value,key) in object" 对象（key为对象键值对的键，value为值）<br>
    </div>    
    <div>---------------------------------------</div>
    <ul id="example-1">
      <li v-for="item in items">
        {{ item.message }}
      </li>
    </ul>
    <div>---------------------------------------</div>
    <ul id="example-2">
      <li v-for="(item, index) in items">
        {{ index }} - {{ item.message }}
      </li>
    </ul>
    <div>---------------------------------------</div>
    <ul id="example-3">
      <li v-for="(value, key) in obj">
        {{ key }} : {{ value }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      obj: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      }
    }
  }
}

</script>

<style type="text/css">
  ul li{
    list-style: none;
  }
  .describe{
    font-size: 12px;
    color:gray;
  }
</style>
