<template>
  <van-tabs v-model="activeName" color="#1296db">
    <van-tab title="餐饮" name="cook" @click="changeActiveToCook">
      <slot name="cook"></slot>
    </van-tab>
    <van-tab title="健身" name="exercise" @click="changeActiveToExercise">
      <slot name="exercise"></slot>
    </van-tab>
    <van-tab title="来访" name="visit" @click="changeActiveToVisit">
      <slot name="visit"></slot>
    </van-tab>
  </van-tabs>
</template>

<script>
import { Tab as VanTab, Tabs as VanTabs} from 'vant';
export default {
  components: {
    VanTabs,
    VanTab
  },
  data() {
    return {
      activeName: 'cook'
    }
  },
  methods: {
    changeActiveToCook() {
      this.activeName = 'cook'
    },
    changeActiveToExercise() {
      this.activeName = 'exercise'
    },
    changeActiveToVisit() {
      this.activeName = 'vist'
    }
  }
}
</script>

<style scoped>

</style>