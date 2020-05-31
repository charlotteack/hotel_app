<template>
  <div id="app">
    <keep-alive include="Home">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
  @import "assets/css/base.css";
  html, body, #app{
  width: 100%;
  height: 100%
  }
  
</style>
