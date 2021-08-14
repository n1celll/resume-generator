<template>
  <transition name="el-zoom-in-top">
    <div v-show="show">
      <TemplatePreview />
      <div class="main-blcok">
        <div class="info-block">
          <p>
            <el-button @click="preview">预览</el-button>
          </p>

          <el-input v-model="userInfo.name"></el-input>
          <el-input v-model="userInfo.tel"></el-input>
          <el-input v-model="userInfo.email"></el-input>
          <el-input v-model="userInfo.gender"></el-input>
          <el-input v-model="userInfo.address"></el-input>
          <el-input v-model="userInfo.birth"></el-input>
          <el-input v-model="userInfo.school"></el-input>
          <el-input v-model="userInfo.status"></el-input>
          <el-input v-model="userInfo.exp"></el-input>
          <el-input v-model="userInfo.target"></el-input>
          <el-input v-model="userInfo.salary"></el-input>
          <el-input type="textarea" v-model="userInfo.brief"></el-input>
          <div
            class="job-line"
            v-for="(item, index) in userInfo.jobs"
            :key="index"
          >
            <el-input v-model="item.title"></el-input>
            <el-input v-model="item.time"></el-input>
            <el-input v-model="item.position"></el-input>
            <el-input type="textarea" v-model="item.content"></el-input>
            <div class="btn-line">
              <el-button type="danger" @click="delJob(index)">删除</el-button>
            </div>
          </div>
          <el-button type="primary" @click="addJob">新增</el-button>

          <div
            class="job-line"
            v-for="(item, index) in userInfo.projects"
            :key="index"
          >
            <el-input v-model="item.name"></el-input>
            <el-input v-model="item.time"></el-input>
            <el-input v-model="item.company"></el-input>
            <el-input type="textarea" v-model="item.content"></el-input>
            <div class="btn-line">
              <el-button type="danger" @click="delPro(index)">删除</el-button>
            </div>
          </div>
          <el-button type="primary" @click="addPro">新增</el-button>
        </div>
        <div class="resume-preview">
          <component :is="'BossVip1'" :userInfo="userInfo"></component>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import TemplatePreview from "../components/TemplatePreview.vue";
import BossVip1 from "../templates//BossVip1/BossVip1.vue";
import { userInfo } from "../store/shared";

function debounce(fn, delay) {
  clearTimeout(fn.timer);
  fn.timer = setTimeout(() => {
    fn();
  }, delay);
}

function throttle(fn, delay) {
  let now = new Date().getTime();

  if (now - fn.lastTime < delay) {
    return;
  }
  setTimeout(fn, delay);
  fn.lastTime = now;
}

export default {
  name: "Main",
  components: {
    TemplatePreview,
    BossVip1,
  },
  data() {
    return {
      show: false,
      val: "",
      val1: "",
      userInfo: userInfo,
    };
  },
  mounted() {
    this.show = true;
  },
  watch: {
    userInfo: {
      handler(val, oldVal) {
        debounce(() => {
          localStorage.setItem("userInfo", JSON.stringify(val));
        }, 1000);
      },
      deep: true, //true 深度监听
    },
  },
  methods: {
    preview(){
      let { href } = this.$router.resolve({ name: 'Preview' })
      window.open(href, '_blank')
    },
    addJob() {
      this.userInfo.jobs.push({});
    },
    delJob(idx) {
      this.userInfo.jobs.splice(idx, 1);
    },
    addPro() {
      this.userInfo.projects = [];
      this.userInfo.projects.push({});
    },
    delPro(idx) {
      this.userInfo.projects.splice(idx, 1);
    },

    onInput() {
      console.log(this.val);
    },
    onInput1() {
      console.log(this.val1);
    },
  },
};
</script>

<style lang="less" scoped>
.main-blcok {
  display: flex;
  justify-content: space-around;
}

.resume-preview {
  width: 700px;
  box-shadow: 0 8px 20px 2px rgb(0 0 0 / 8%);
  box-sizing: border-box;
}

.test1 {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: chartreuse;
}
.info-block {
  width: 600px;
  padding: 10px;
  .el-input {
    width: 400px;
  }
  .btn-line {
    display: flex;
  }
}
</style>