<template>
    <nav-bar class="home-nav">
      <div slot="center">{{centerTitle}}</div>
      <van-icon name="search" slot="right" size="24" color="#fff" class="searchIcon"/>
    </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { Icon as VanIcon} from 'vant';
export default {
   components: {
     NavBar,
     VanIcon
   },
   props: {
     centerTitle: {
       type: String,
       default: '标题',
       required: true
      }
   }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
  .searchIcon{
    padding-top: 10px;
  }
</style>