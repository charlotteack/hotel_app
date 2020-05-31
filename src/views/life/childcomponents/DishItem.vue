<template>
  <div class="container">
    <goods-card :imgURL='dishItem.img' :title='dishItem.dishName' :desc='dishItem.desc' :num='dishItem.num'>

    </goods-card>
  </div>
</template>

<script>
import GoodsCard from 'components/common/goodscard/GoodsCard.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    GoodsCard,
  },
  props: {
    dishItem: {
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
