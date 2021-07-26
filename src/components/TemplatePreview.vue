<template>
  <div class="swiper">
    <div class="flex-content">
      <div class="item" v-for="item in templatesList" :key="item">
        <div>
          <img class="resume-pic" :src="item.pic" alt="" >
          <div class="name">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import templates from "../templates";

export default {
  name: "TemplatePreview",
  data() {
    return {
      templatesList: templates,
    };
  },
};
</script>

<style scoped>
.swiper {
  margin: auto;
  overflow-x: scroll;
  margin-top: 10px;
  max-width: 1000px;
}

.flex-content {
  display: flex;
  justify-content: space-around;
}

.item {
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.resume-pic{
  height: 140px;
  border: 1px solid #003;

}
.name{
font-size: 12px;
}
</style>