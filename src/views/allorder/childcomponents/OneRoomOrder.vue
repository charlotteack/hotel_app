<template>
  <div>
    <van-cell title="酒店名" icon="shop-o" value="房间信息"/>
    <room-item :roomItem='roomItem'>
      <van-button size="mini" slot='roombtn' @click="cancelorder">取消订单</van-button>
    </room-item>
  </div>
</template>

<script>
import { Icon as VanIcon} from 'vant';
import { Cell as VanCell} from 'vant';
import { Button as VanButton} from 'vant'
import {Toast} from 'vant';
import  RoomItem  from 'components/content/rooms/RoomItem.vue'
export default {
  components: {
    VanIcon,
    VanCell,
    VanButton,
    RoomItem
  },
  props: {
    roomItem: {
      type: Object,
      default() {
        return {}
      },
      required: true
    },
  },
  methods: {
    cancelorder() {
      Toast.success('删除成功')
    }
  }
}
</script>

<style scoped>

</style>