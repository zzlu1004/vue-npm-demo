<template>
  <div class="wrapper">这是一个datePicker组件
    <el-input-number v-model="vote_rule" controls-position="right"></el-input-number>
  </div>
</template>

<script>
export default {
    name:'demo',
    data(){
      return {
        vote_rule: 0
      }
    },
    created(){
      console.log(123)
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
  color: red;
}
</style>