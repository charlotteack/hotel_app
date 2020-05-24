<template>
  <div id="home">

    <nav-bar class="home-nav">
      <div slot="center">雪中送炭酒店</div>
      <van-icon name="search" slot="right" size="24" color="#fff" class="searchIcon"/>
    </nav-bar>

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

    <van-popup v-model="showCity" position="bottom" :style="{ height: '40%' }">
      <van-area title="请选择城市" :area-list="areaList" @cancel='closeCityPopup' @confirm='selectCity'/>
    </van-popup>

    <!-- 酒店展示区 -->
    <van-cell title="附近酒店" icon="shop-o" />
    <hotel-list></hotel-list>

  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  import { Swipe as VanSwipe, SwipeItem as VanSwipeItem} from 'vant';
  import { Grid as VanGrid, GridItem as VanGridItem} from 'vant';
  import { Icon as VanIcon} from 'vant';
  import { Popup as VanPopup} from 'vant';
  import { Cell as VanCell} from 'vant';
  import { Area as VanArea} from 'vant';
  import cityList from '@/common/area.js'

  import HotelList from '@/components/content/hotels/HotelList'
  
  import Scroll from 'components/common/scroll/Scroll'
  export default {
    name: "Home",
    components: {
      NavBar,
      VanIcon,
      VanSwipe,
      VanSwipeItem,
      VanGrid,
      VanGridItem,
      VanPopup,
      VanCell,
      VanArea,
      Scroll,
      HotelList
    },
    data() {
      return {
        iconNames: ['new','hot','good-job'],
        iconTexts: ['新店开张','最受欢迎','好评如潮'],
        myCity: '',
        showCity: false,
        areaList: cityList,
        selectedCity: []
     }
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
        this.showCity = false
      }
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
  .searchIcon{
    padding-top: 10px;
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
</style>
