<template>
  <div class="header">
    <div class="enter" @click="$router.push({ name: `Index` })">
      <img class="logo" src="../assets/logo.png" alt="" srcset="" />
      <span class="title">Resume Generator（开发中...）</span>
    </div>
    <a class="github-logo" href="https://github.com/n1celll/resume-generator" target="blank">
      <img
        
        src="../assets/imgs/github.png"
        alt=""
        srcset=""
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 90px;
  box-sizing: border-box;
  border-bottom: 1px solid #dcdfe6;
  background: linear-gradient(134deg, #f8ac56 0%, #eb8c48 100%);
  display: flex;
  align-items: center;
}

.enter {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo {
  height: 30px;
  margin-left: 30px;
  margin-right: 20px;
}

.title {
  font-size: 24px;
  font-weight: 550;
  color: #fff7f7;
}

.github-logo {
  padding-right: 80px;
  margin-left: auto;

  img{
    height: 60px;
  }
}
</style>