<template>

  <van-card
    price="120.00"
    desc="描述信息描述信息描述信息描述信息"
    title="酒店名称"
    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
  >
    <template #tags>
      <van-tag plain type="danger">标签</van-tag>
      <van-tag plain type="danger">标签</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">按钮</van-button>
      <van-button size="mini">按钮</van-button>
    </template>
  </van-card>

</template>

<script>
  import { Card as VanCard} from 'vant';
  export default {
    components: {
      VanCard
    },
    props: {
      
    }
    
  }
</script>

<style scoped>

</style>