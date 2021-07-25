<template>
    <div class="header">
        <div class="enter" @click="$router.push({name: `Index`})">
            <img class="logo" src="../assets/logo.png" alt="" srcset="">
            <span class="title">Resume Generator</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {

  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
    .header {
        width: 100%;
        height: 90px;
        box-sizing: border-box;
        border-bottom: 1px solid #dcdfe6;
        background: linear-gradient(134deg, #f8ac56 0%, #eb8c48 100%);
        display: flex;
        align-items: center;
    }

    .enter{
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .logo{
        height: 30px;
        margin-left: 30px;
        margin-right: 20px;
    }

    .title{
        font-size: 24px;
        font-weight: 550;
        color: #fff7f7;
    }
</style>