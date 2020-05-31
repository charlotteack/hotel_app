<template>
  <div>
    <TabBar>
      <TabBarItem path="/home">
        <img src="~assets/image/tabbar/home.svg" alt="" slot="item-icon">
        <img src="~assets/image/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <!--<TabBarItem path="/order">-->
        <!--<img src="~assets/image/tabbar/order.svg" alt="" slot="item-icon">-->
        <!--<img src="~assets/image/tabbar/order_active.svg" alt="" slot="item-icon-active">-->
        <!--<div slot="item-text">订单</div>-->
      <!--</TabBarItem >-->
      <TabBarItem path="/life">
        <img src="~assets/image/tabbar/life.svg" alt="" slot="item-icon">
        <img src="~assets/image/tabbar/life_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">入住</div>
      <!-- </TabBarItem>
      <TabBarItem path="/cart">
        <img src="~assets/image/tabbar/cart.svg" alt="" slot="item-icon">
        <img src="~assets/image/tabbar/cart_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </TabBarItem> -->
      <TabBarItem path="/profile">
        <img src="~assets/image/tabbar/user.svg" alt="" slot="item-icon">
        <img src="~assets/image/tabbar/user_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
