<template>
  <div>
    <ul>
      <li v-for="(item,index) in arr" :key="index">{{ item }} <button @click="del_random(index)">删除</button></li>
      <br>
      <button @click="add_random">添加</button>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr:['1','2']
    }
  },
  methods: {
    add_random(){
      let random = Math.floor(Math.random()*10);
      this.arr.push(random);
    },
    del_random(index){
      this.arr.splice(index, 1);
    }
  },
}
</script>

<style>

</style>
