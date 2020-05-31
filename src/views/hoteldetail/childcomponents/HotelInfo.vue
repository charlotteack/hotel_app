<template>
  <div>
    <img src="~assets/image/hotel/hotel.jpg" alt="暂时无法显示" class="hotelImg">
    <div class="hotelContent">
      <div class="contentLeft">
        <van-icon name="location-o" style="vertical-align:middle;padding:5px"/>
        <span>酒店位置</span>
      </div>
      <div class="contentRight">
        <span>综合评分</span>
        <van-rate v-model="hotelStarValue" allow-half void-icon="star" void-color="#eee" style="vertical-align:top"/>
      </div>
    </div>
    
    <van-divider
    :style="{ color: '#1989fa', borderColor: '#1989fa'}">
    简介
    </van-divider>
    <p class="simpleInfo">
      爱情酒店等你来爱情酒店等你来爱情酒店等你来爱情酒店等你来
    </p>
  </div>
</template>

<script>
import { Divider as VanDivider} from 'vant';
import { Rate as VanRate} from 'vant';
import {Icon as VanIcon} from 'vant'
export default {
  components: {
    VanDivider,
    VanRate,
    VanIcon
  },
  
  props: {
    hotelPosition:{
      type: String,
    },
    hotelStarValue: {
      type: Number,
      default: 5
    },
    hotelSimpleInfo: {
      type: String,

    }
  }
}
</script>

<style scoped>
.hotelImg {
  width: 100%;
  height: 200px;
}
.hotelContent{
  display: flex;
  font-size: 14px;
  line-height: 25px;
  margin: 10px 0 0;
}
.contentLeft{
  flex: 1;
}
.contentRight{
  flex: 1;
}
.van-divider{
  margin: 5px 0 10px;
}
p{
  font-size: 14px;
}
</style>

