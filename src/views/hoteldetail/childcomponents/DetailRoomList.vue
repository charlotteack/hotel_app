<template>
  <div class="container">
    <room-item v-for="i in roomList.length"  :key='i' :roomItem='roomList[i-1]'>
      <van-button size="mini" slot="roombtn" @click="getOrder">预约</van-button>
    </room-item>
  </div>
</template>

<script>
import RoomItem from 'components/content/rooms/RoomItem.vue'
import { Button as VanButton} from 'vant'
export default {
  data() {
    return {

    }
  },
  components: {
    RoomItem,
    VanButton
  },
  props: {
    roomList:{
      type: Array,
      required: true
    },
  },
  methods: {
    getOrder() {
      this.$router.push('/order')
    }
 }
}
</script>

<style scoped>

</style>
