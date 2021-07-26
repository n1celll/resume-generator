<template>
  <div class="container">
    <div class="top-block">
      <img src="./imgs/avatar.jpg" class="avatar" />
      <div class="info-block">
        <div class="info-line name">大帅逼</div>
        <div class="info-line">
          男 | 3990-09 | 成都 | 西南装逼大学 | 统招本科
        </div>
        <div class="info-line">Tel: 17666666666 | Email: example@gmail.com</div>
        <div class="info-line">
          在职-考虑机会 | 工作经验：30年经验 | 全栈 | 期望薪资：15-20W
        </div>
      </div>
    </div>
    <div class="bottom-block">
      <div class="detail-line">
        <div class="first big-title">个人优势 👍</div>
        <div class="second">
          30年编程经验，精通各种语言，熟悉各种SQL，精通所有已知算法。精通所有框架。
        </div>
        <div class="third"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "BossVip1",
//   props: {
//     userInfo: {
//       type: Object,
//       default: {},
//     },
//   },
  data(){
      return {

      }
  }
};
</script>

<style scoped>
.container {
  width: 100%;

}

.top-block {
  background-image: url("./imgs/r-header.png");
  width: 100%;
  height: 210px;
  display: flex;
  align-items: center;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 4px;
  border: 2px solid #ffdfa1;
  margin-left: 30px;
}

.info-block {
  height: 130px;
  margin-left: 40px;
}

.info-line {
  font-size: 13px;
  color: #fff;
  line-height: 18px;
  font-weight: 400;
  margin-top: 15px;
  text-align: left;
}

.name {
  margin-top: 0;
  font-size: 30px;
  font-family: Alibaba-PuHuiTi-Bold;
  font-weight: 700;
  color: #ffdfa1;
  line-height: 30px;
}

.bottom-block {
  padding-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.detail-line {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.first {
  width: 20%;
  text-align: end;
}
.second {
  width: 55%;
  line-height: 26px;
  font-size: 13px;
  font-weight: 400;
  color: #333;
}
.third {
  width: 15%;
}

.big-title {
  font-size: 18px;
  font-weight: bold;
}
</style>