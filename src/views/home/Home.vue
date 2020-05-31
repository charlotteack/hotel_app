<template>
  <div id="home">

    <!-- <iframe id="geoPage" width=0 height=0 frameborder=0 style="display:none;" scrolling="no" src="https://apis.map.qq.com/tools/geolocation?key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp"></iframe> -->

    <HomeNavBar></HomeNavBar>
·   <scroll class="scrollContent" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>

      <van-grid :column-num="3">
        <van-grid-item v-for="value in 3" :key="value" :icon="iconNames[value-1]" :text="iconTexts[value-1]" />
      </van-grid>

      <div class="myGraphic">
        <span>您当前所在城市:{{myCity}}</span>
        <div class="changeGraphic" @click="showCityPopup">
          <van-icon name="exchange" />
          <span>切换城市</span>
        </div>
      </div>

      <van-popup v-model="showCity" position="bottom" :style="{ height: '40%' }" get-container='body'>
        <van-area title="请选择城市" :area-list="areaList" @cancel='closeCityPopup' @confirm='selectCity'/>
      </van-popup>

      <!-- 酒店展示区 -->
      <van-cell title="附近酒店" icon="shop-o" />
      <hotel-list :hotelList='hotels.list'></hotel-list>

    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar'
  import HomeNavBar from "./childcomponents/HomeNavBar";
  import Scroll from '@/components/common/scroll/Scroll'

  import { Swipe as VanSwipe, SwipeItem as VanSwipeItem} from 'vant';
  import { Grid as VanGrid, GridItem as VanGridItem} from 'vant';
  import { Icon as VanIcon} from 'vant';
  import { Popup as VanPopup} from 'vant';
  import { Cell as VanCell} from 'vant';
  import { Area as VanArea} from 'vant';
  import { Toast } from 'vant';
  import cityList from '@/common/area.js'

  import HotelList from '@/components/content/hotels/HotelList'
  
  import {getCityHotels} from '@/network/home'
  import {backTopMixin} from "@/common/mixins";

  export default {
    name: "Home",
    components: {
      MainTabBar,
      HomeNavBar,
      Scroll,
      VanIcon,
      VanSwipe,
      VanSwipeItem,
      VanGrid,
      VanGridItem,
      VanPopup,
      VanCell,
      VanArea,
      HotelList
    },
    data() {
      return {
        iconNames: ['new','hot','good-job'],
        iconTexts: ['新店开张','最受欢迎','好评如潮'],
        myCity: '天门市',
        showCity: false,
        areaList: cityList,
        selectedCity: [],
        hotels: {
          page: 0,
          list: [
            {img: 'https://img.yzcdn.cn/vant/ipad.jpeg',price: 100, desc:'这里是描述', hotelName:'酒店名'},
            {img: 'https://img.yzcdn.cn/vant/ipad.jpeg',price: 100, desc:'这里是描述', hotelName:'酒店名'},
            {img: 'https://img.yzcdn.cn/vant/ipad.jpeg',price: 100, desc:'这里是描述', hotelName:'酒店名'},
            {img: 'https://img.yzcdn.cn/vant/ipad.jpeg',price: 100, desc:'这里是描述', hotelName:'酒店名'},
            {img: 'https://img.yzcdn.cn/vant/ipad.jpeg',price: 100, desc:'这里是描述', hotelName:'酒店名'}
          ]
        },
        saveY: 0
     }
    },
    created() {
      // this.getHomeCityHotels()
    },
    mounted() {
      // this.Tmap()
    },
    mixins: [backTopMixin],
    activated() {
      this.$refs.scroll.refreshHeight()
      this.$refs.scroll.myScrollTo(0, this.saveY, 0)
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getY()
    },
    methods: {
      showCityPopup() {
        this.showCity = true
      },
      closeCityPopup() {
        this.showCity = false
      },
      selectCity(res) {
        // console.log(res)
        this.selectedCity = res
        this.myCity = this.selectedCity[0].name + this.selectedCity[1].name
        this.showCity = false
      },

      getHomeCityHotels() {
        let page = this.hotels.page + 1
        getCityHotels({city: this.myCity, page: page})
        .then(res => {
          if (res.status === 200) {
            this.hotels.page += 1
            this.hotels.list.push(...res.data.list)

            this.$refs.scroll.finishPull()
          } else {
            Toast.fail(res.msg);
          }
        })
        .catch(error => {
          Toast.fail(error);
        });
      },

      loadMore() {
        this.getHomeCityHotels()
      },

      contentScroll(position) {
        this.listenBackTop(position)
      },
//       Tmap() {
//         window.addEventListener('message', function(event) {
//           // if(event){
//           //   let loc = event.data;                    
//           //   this.myCity = loc.city;     
//           // }        
//         }, false); 
//       }

    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }

  .myGraphic{
    position: relative;
    font-size: 13px;
    line-height: 40px;
    padding: 0 18px;
  }
  .changeGraphic{
    float: right;
  }

  .scrollContent {
    overflow: hidden;

    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
  }
</style>
