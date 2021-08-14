<template>
  <div class="container">
    <div class="top-block">
      <img src="./imgs/avatar.jpg" class="avatar" />
      <div class="info-block">
        <div class="info-line name">{{ userInfo.name }}</div>
        <div class="info-line">
          {{ userInfo.gender }} | {{ userInfo.address }} |
          {{ userInfo.birth }} | {{ userInfo.school }}
        </div>
        <div class="info-line">
          Tel: {{ userInfo.tel }} | Email: {{ userInfo.email }}
        </div>
        <div class="info-line">
          工作状态: {{ userInfo.status }} | 工作经验：{{ userInfo.exp }} |
          求职意向: {{ userInfo.target }} | 期望薪资：{{ userInfo.salary }}
        </div>
      </div>
    </div>
    <div class="bottom-block">
      <div class="detail-line">
        <div class="first big-title">个人优势</div>
        <div class="second">
          {{ userInfo.brief }}
        </div>
      </div>
      <div class="detail-line">
        <div class="first big-title">工作经历</div>
        <div class="second">
          <div class="job">
            <div class="item" v-for="(item,idx) in userInfo.jobs" :key="idx">
              <div class="job-info-line">
                <div class="title">{{item.title}} </div>
                <div class="time"> {{item.time}} </div>
              </div>
              <div class="position">岗位：{{item.position}} </div>
              <pre class="job-content">{{item.content}}</pre>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-line">
        <div class="first big-title">项目经历</div>
        <div class="second">
          <div class="job">
            <div class="item" v-for="(item,idx) in userInfo.projects" :key="idx">
              <div class="job-info-line">
                <div class="title">{{item.name}} </div>
                <div class="time"> {{item.time}} </div>
              </div>
              <div class="position">公司：{{item.company}} </div>
              <pre class="job-content">{{item.content}} </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BossVip1",
  props: {
    userInfo: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 700px;
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
  min-height: 30px;
}

.bottom-block {
  padding-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.detail-line {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 98%;
}

.first {
  width: 20%;
  text-align: end;
}
.second {
  text-align: start;
  width: 70%;
  line-height: 22px;
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

.job-info-line {
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 15px;
    line-height: 24px;
    margin-right: 22px;
    color: #000;
  }
  .time {
    font-size: 13px;
  }
}
.job {
  .item {
    margin-bottom: 20px;
    .job-content{
      width: 350px;
    }
    .position{
      color: rgb(129, 128, 126);
    }
  }
}
</style>