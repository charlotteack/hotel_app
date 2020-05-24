<template>
  <div id="app">
    <keep-alive include="Home">
      <router-view/>
    </keep-alive>
    <main-tab-bar v-if="isShowTab"/>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar'
  export default {
    name: 'App',
    components: {
      MainTabBar
    },
    data() {
      return {
        list: ['/login','/reg','/forget']
      }
    },
    computed: {
      isShowTab() {
        return !this.list.includes(this.$route.path)
      }
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  html, body, #app{
  width: 100%;
  height: 100%
  }
  
</style>
