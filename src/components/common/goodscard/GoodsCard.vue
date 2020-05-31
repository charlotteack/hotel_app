<template>
  <div class="container">
    <van-card
      :num="num"
      :price="price"
      :desc="desc"
      :title="title"
      :thumb="imgURL"
    >
      <template #tags>
        <slot name="myTag"></slot>
      </template>
      <template #footer>
        <slot name="myFooter"></slot>
      </template>
    </van-card>
  </div>
</template>

<script>
import { Card as VanCard } from 'vant';
export default {
  data() {
    return {

    }
  },
  components: {
    VanCard,
  },
  props: {
    num: {
      type: Number,
    },
    price: {
      type: Number,
    },
    desc: {
      type: String
    },
    title: {
      type: String
    },
    imgURL: {
      type: String,
    }
  }
}
</script>

<style scoped>

</style>
