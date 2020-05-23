<template>
  <div id="order">
    <nav-bar class="order-nav"><div slot="center">订单</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "Order",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
  #order {
    height: 100vh;
    position: relative;
  }
  .order-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>
