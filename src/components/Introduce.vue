<template>
<div class="container">
  <h1>Resume Generator</h1>
  <p>最实用的生成简历的工具</p>
  <el-button @click="$router.push({name: 'Main'})">快速开始</el-button>
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
.container{
  padding-top: 70px;
  padding-bottom: 70px;
}
  h1 {
    text-align: center;
    margin: 0;
    font-size: 45px;
    letter-spacing: 0.01em;
    color: #eb8c48;
  }

  p {
    text-align: center;
    font-size: 24px;
    letter-spacing: 0.01em;
    font-weight: 200;
  }

  .el-button{
    width: 150px;
    height: 60px;
    margin-top: 30px;
    border-radius: 12px;
    color: #fff;
    font-size: 18px;
    background: rgb(248, 172, 86);
  }
</style>
