<template>
  <div @click="itemClick">
    <goods-card :imgURL='hotelItem.img' :price='hotelItem.price' :desc='hotelItem.desc' :title='hotelItem.hotelName'>
      <van-tag plain type="danger" slot="myTag">经济实惠</van-tag>
    </goods-card>
  </div>

</template>

<script>
  import GoodsCard from 'components/common/goodscard/GoodsCard.vue'
  import { Tag as VanTag } from 'vant'
  export default {
    components: {
      GoodsCard,
      VanTag
    },
    props: {
      hotelItem: {
        type: Object,
        default() {
          return {}
        },
        required: true
      }
    },
    methods: {
      itemClick() {
        this.$router.push('/detail')
        // this.$router.push('/detail/' + this.goodsItem.id)
      }
    }

    
  }
</script>

<style scoped>

</style>