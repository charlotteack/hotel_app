<template>
  <div class="hotelListItem">
    <hotel-list-item v-for="i in hotelList.length" :key="i" :hotelItem='hotelList[i-1]'></hotel-list-item>
  </div>
  
</template>

<script>
  import HotelListItem from './HotelListItem'
  export default {
    components: {
      HotelListItem
    },
    props: {
      hotelList: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>