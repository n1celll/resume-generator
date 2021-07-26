<template>
  <transition name="el-zoom-in-top">
    <div v-show="show">
      <TemplatePreview />

      <div class="main-blcok">
        <div>个人信息</div>
        <div class="resume-preview">
          <BossVip1 />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import TemplatePreview from "../components/TemplatePreview.vue";
import BossVip1 from "../templates//BossVip1/BossVip1.vue";

export default {
  name: "Main",
  components: {
    TemplatePreview,
    BossVip1,
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
};
</script>

<style scoped>
.main-blcok {
  display: flex;
  justify-content: space-around;
}

.resume-preview{
  width: 600px;
    box-shadow: 0 8px 20px 2px rgb(0 0 0 / 8%);
  box-sizing: border-box;
}
</style>