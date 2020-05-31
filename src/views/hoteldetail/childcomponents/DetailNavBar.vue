<template>
  <back-nav-bar :centerTitle="hotelName"></back-nav-bar>
</template>

<script>
import BackNavBar from 'components/content/backnavbar/BackNavBar'
export default {
   components: {
    BackNavBar
   },
   props: {
     hotelName: {
       type: String,
       default: '酒店名',
       required: true
     }
   }

}
</script>

<style scoped>

</style>