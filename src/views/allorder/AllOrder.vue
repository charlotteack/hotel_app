<template>
  <div>
    <all-order-nav-bar></all-order-nav-bar>
    <one-room-order v-for="i in orderList.length" :key="i" :roomItem='orderList[i-1]'></one-room-order>
  </div>

</template>

<script>
import AllOrderNavBar from './childcomponents/AllOrderNavBar'
import OneRoomOrder from './childcomponents/OneRoomOrder'
import {getAllOrder} from 'network/order'
export default {
  components: {
    AllOrderNavBar,
    OneRoomOrder,

  },
  data() {
    return {
      orderList: [
        {img: 'https://img.yzcdn.cn/vant/ipad.jpeg', price:100, desc:'这里是描述', roomName:'单人间'}
      ]
    }
  },
  methods: {
    getOrderList() {
      //通过邮件拿到
      getAllOrder({}).then(res => {
        this.orderList = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>