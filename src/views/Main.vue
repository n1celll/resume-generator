<template>
  <transition name="el-zoom-in-top">
    <div v-show="show">

            <TemplatePreview />

        <div class="main-blcok">
            <div>个人信息</div>
            <div>预览</div>
        </div>
    </div>
  </transition>
</template>

<script>
import TemplatePreview from '../components/TemplatePreview.vue'

export default {
    components: {
TemplatePreview
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
.main-blcok{
    display: flex;
    justify-content: space-around;
}
</style>