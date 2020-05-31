<template>
  <div>
    <div class="code">
      <VueQr :margin='20' :size='200' :text='config.text' :logoSrc=config.logoSrc></VueQr>
    </div>
    

    <div class="share">
      <van-button type="info" @click="share">分享房间二维码</van-button>
    </div>
    

    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />
  </div>
  
</template>

<script>
import VueQr from 'vue-qr';
import { ShareSheet as VanShareSheet} from 'vant';
import { Button as VanButton} from 'vant';
import { Toast } from 'vant'

export default {
  data () {
    return {
      config: {
        text:'123456',		
        logoSrc: require('@/assets/image/common/hotellogo.png'),
      },
      showShare: false,
      options: [
        { name: 'QQ', icon: 'qq' },
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '分享海报', icon: 'poster' },
      ],
    }
  },
  props: {

  },
  components: {
      VueQr,
      VanShareSheet,
      VanButton,
      Toast
  },
   methods: {
     share() {
      this.showShare = true;
     },
      onSelect(option) {
        Toast('分享成功');
        this.showShare = false;
      },
  },
}
</script>

<style scoped>
.code {
  margin-left: calc(50% - 100px);
  margin-top: calc(50% - 100px);
}
.share{
  margin-top: 50px;;
  text-align: center;
}
</style>