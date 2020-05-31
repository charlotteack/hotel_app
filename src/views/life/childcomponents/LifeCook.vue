<template>
  <div class="dish">
      <van-cell title="酒店名" icon="smile-o" value="菜品信息"/>

      <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
      >
      今日菜谱
      </van-divider>

      <div class="eating">
        <h3>主食类</h3>
        <dish-item v-for="i in dishList.length" :key='i' :dishItem='dishList[i]'></dish-item>
      </div>

  </div>

</template>
<script>
import { Icon as VanIcon} from 'vant';
import { Cell as VanCell ,CellGroup as VanCellGroup } from 'vant';
import { Divider as VanDivider} from 'vant';
import DishItem from './DishItem'
export default {
  components: {
    VanIcon,
    VanCellGroup,
    VanCell,
    VanDivider,
    DishItem
  },
  data() {
    return {
      dishList: [
        {img: 'https://img.yzcdn.cn/vant/ipad.jpeg',desc:'这里是描述',dishName:'菜品名',num: 10},
        {img: 'https://img.yzcdn.cn/vant/ipad.jpeg',desc:'这里是描述',dishName:'菜品名',num: 10},
        {img: 'https://img.yzcdn.cn/vant/ipad.jpeg',desc:'这里是描述',dishName:'菜品名',num: 10},
        {img: 'https://img.yzcdn.cn/vant/ipad.jpeg',desc:'这里是描述',dishName:'菜品名',num: 10},
      ]
    }
  }
}
</script>

<style scoped>
.eating{
  text-align: center;
}
</style>