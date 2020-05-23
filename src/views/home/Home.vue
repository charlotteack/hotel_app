<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">雪中送炭酒店</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Scroll from 'components/common/scroll/Scroll'
  export default {
    name: "Home",
    components: {
      NavBar,
      Scroll
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;

  }
</style>
