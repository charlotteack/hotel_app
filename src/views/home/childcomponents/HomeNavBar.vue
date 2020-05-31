<template>
  <search-nav-bar :centerTitle="title"></search-nav-bar>
</template>

<script>
import SearchNavBar from 'components/content/searchnavbar/SearchNavBar.vue'
export default {
   components: {
    SearchNavBar
   },
   data() {
     return {
      title: '雪中送炭酒店管理平台'
     }
   }
}
</script>

<style scoped>

</style>