<template>
  <div>
    <Header v-if="$route.name != 'Preview'" />
    <router-view />
  </div>

</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  created(){
    console.log(this.$route)
  }
}
</script>
