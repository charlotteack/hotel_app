<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" :hotelName='hotelName'></detail-nav-bar>

    <scroll class="detail-content" ref="scroll" :probe-type="3">

      <hotel-info></hotel-info>

      <detail-room-list :roomList='roomList'></detail-room-list>

      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>

      <van-cell title="其他酒店" icon="shop-o" />
      <hotel-list :hotelList='hotelList'></hotel-list>
    </scroll>


  </div>

</template>

<script>
import DetailNavBar from './childcomponents/DetailNavBar'
import HotelInfo from './childcomponents/HotelInfo'
import Scroll from 'components/common/scroll/Scroll'
import DetailRoomList from './childcomponents/DetailRoomList'
import DetailCommentInfo from './childcomponents/DetailCommentInfo'
import { Icon as VanIcon} from 'vant';
import { Cell as VanCell} from 'vant';
import HotelList from '@/components/content/hotels/HotelList'

export default {
  components: {
    DetailNavBar,
    HotelInfo,
    Scroll,
    DetailRoomList,
    DetailCommentInfo,
    VanIcon,
    VanCell,
    HotelList
  },
  data() {
    return {
      hotelName: '酒店名',
      commentInfo: {},
      roomList: [
        {img: 'https://img.yzcdn.cn/vant/ipad.jpeg',price:100,desc:'这里是描述',roomName:'单人间'},
        {img: 'https://img.yzcdn.cn/vant/ipad.jpeg',price:100,desc:'这里是描述',roomName:'单人间'},
        {img: 'https://img.yzcdn.cn/vant/ipad.jpeg',price:100,desc:'这里是描述',roomName:'单人间'}
      ],
      hotelList: [
        {img: 'https://img.yzcdn.cn/vant/ipad.jpeg',price: 100, desc:'这里是描述', hotelName:'酒店名'},
        {img: 'https://img.yzcdn.cn/vant/ipad.jpeg',price: 100, desc:'这里是描述', hotelName:'酒店名'},
        {img: 'https://img.yzcdn.cn/vant/ipad.jpeg',price: 100, desc:'这里是描述', hotelName:'酒店名'},
        {img: 'https://img.yzcdn.cn/vant/ipad.jpeg',price: 100, desc:'这里是描述', hotelName:'酒店名'},
        {img: 'https://img.yzcdn.cn/vant/ipad.jpeg',price: 100, desc:'这里是描述', hotelName:'酒店名'}
      ]
    }
  }
}
</script>

<style scoped>
 #detail {
   position: relative;
   height: 100vh;
 }
  .detail-content {
    height: calc(100% - 44px);
  }
  .detail-content {
    overflow: hidden;

    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
  }
</style>