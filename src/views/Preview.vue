<template>
<div class="resume-preview">
    <component :is="'BossVip1'" :userInfo="userInfo"></component>
</div>
</template>

<script>
import { userInfo } from "../store/shared";
import BossVip1 from "../templates//BossVip1/BossVip1.vue";
export default {
    name: "Preview",
    data(){
        return{
        userInfo: userInfo

        }
    },
    components:{
        BossVip1
    }
}
</script>

<style scoped>
.resume-preview {
    margin: auto;
    padding-top: 10px;
  width: 700px;
  box-shadow: 0 8px 20px 2px rgb(0 0 0 / 8%);
  box-sizing: border-box;
}
</style>