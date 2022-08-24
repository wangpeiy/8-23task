<template>
  <div>
    <ul>
      <li v-for="(item,index) in arr" :key="index">{{ item }}</li>
    </ul>
    <button @click="change_data">走一走</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
       arr: ["帅哥", "美女", "程序猿"],
    }
  },
  methods: {
    change_data(){
      let [data]= this.arr.splice(0,1)
      this.arr.push(data)
    }
  },
}
</script>

<style>

</style>
