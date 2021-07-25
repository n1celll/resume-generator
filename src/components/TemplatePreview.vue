<template>
  <div class="swiper">
      <div class="flex-content">
        <p class="item" v-for="item in 10" :key="item">{{ item }}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "TemplatePreview",
};
</script>

<style scoped>
.swiper {
    margin: auto;
  overflow-x: scroll;
  margin-top: 20px;
  max-width: 1000px;
}

.flex-content{
    display: flex;
  width: max-content;
  width: fit-content;
  justify-content: space-around;
}

.item{
    height: 120px;
    margin: 20px;
    width: 60px;
    border: 1px solid #003;
    width: 120px;
}
</style>