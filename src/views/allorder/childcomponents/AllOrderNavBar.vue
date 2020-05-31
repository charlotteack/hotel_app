<template>
  <back-nav-bar :centerTitle="title"></back-nav-bar>
</template>

<script>
import BackNavBar from 'components/content/backnavbar/BackNavBar'
export default {
   components: {
    BackNavBar
   },
   data() {
     return {
       title: '所有订单'
     }
   }

}
</script>

<style scoped>

</style>