<template>
    <transition name="el-zoom-in-center">
        <Introduce v-show="show" />
    </transition>
    <transition name="el-zoom-in-center">
        <TemplatePreview v-show="show" />
    </transition>
</template>

<script>
import Introduce from '../components/Introduce.vue'
import TemplatePreview from '../components/TemplatePreview.vue'
import { userInfo } from "../store/shared";

export default {
    components : {
        Introduce,
        TemplatePreview,
        
    },
    data:() => ({
      show: false
    }),
    mounted(){
        this.show = true
        console.log(userInfo)
    }
}
</script>