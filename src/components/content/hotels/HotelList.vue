<template>
  <div class="hotelListItem">
    <hotel-list-item v-for="value in 10" :key="value"></hotel-list-item>
  </div>
  
</template>

<script>
  import HotelListItem from './HotelListItem'
  export default {
    components: {
      HotelListItem
    },
    props: {

    }
  }
</script>

<style scoped>

</style>