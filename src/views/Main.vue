<template>
  <transition name="el-zoom-in-top">
    <div v-show="show">
      <TemplatePreview />

      <div class="main-blcok">
        <div>
          <el-input v-model="userInfo.name"></el-input>
        </div>
        <div class="resume-preview">
          <BossVip1 :userInfo="userInfo" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import TemplatePreview from "../components/TemplatePreview.vue";
import BossVip1 from "../templates//BossVip1/BossVip1.vue";
import { userInfo } from "../store/shared";

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
      userInfo: userInfo
    };
  },
  mounted() {
    this.show = true;
  },
  methods: {
    debounce(fn, delay) {
      clearTimeout(fn.timer);
      fn.timer = setTimeout(() => {
        fn();
      }, delay);
    },

    throttle(fn, delay) {
      let now = new Date().getTime();

      if (now - fn.lastTime < delay) {
        return;
      }
      setTimeout(fn, delay);
      fn.lastTime = now;
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

<style scoped>
.main-blcok {
  display: flex;
  justify-content: space-around;
}

.resume-preview {
  width: 600px;
  box-shadow: 0 8px 20px 2px rgb(0 0 0 / 8%);
  box-sizing: border-box;
}

.test1{
  display: inline-block;
  width: 40px;
  height: 40px;
  background: chartreuse;
}
</style>