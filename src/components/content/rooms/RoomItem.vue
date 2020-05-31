<template>
  <div class="container">
    <goods-card :imgURL='roomItem.img' :price='roomItem.price' :desc='roomItem.desc'>
      <van-tag plain type="danger" slot="myTag">{{roomItem.roomName}}</van-tag>
      <slot slot="myFooter" name="roombtn"></slot>
    </goods-card>
  </div>
</template>

<script>
import GoodsCard from 'components/common/goodscard/GoodsCard.vue'
import { Tag as VanTag } from 'vant'
export default {
  data() {
    return {

    }
  },
  components: {
    GoodsCard,
    VanTag,
  },
  props: {
    roomItem: {
      type: Object,
      default() {
        return {}
      },
      required: true
    },
  }
}
</script>

<style scoped>

</style>
