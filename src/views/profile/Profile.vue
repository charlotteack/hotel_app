<template>
<div id="profile">
  <nav-bar class="profile-nav"><div slot="center">个人中心</div></nav-bar>

  <user-info :username='username' :sex='sex' :createTime='createTime'>

  </user-info>
  <user-service>

  </user-service>

  <main-tab-bar/>
</div>

</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar'
  import NavBar from "components/common/navbar/NavBar"
  import UserInfo from './childcomponents/UserInfo'
  import UserService from './childcomponents/UserService'
  export default {
    name: "Profile",
    components: {
      MainTabBar,
      NavBar,
      UserInfo,
      UserService
    },
    data() {
      return {
        username: 'xuezhongsongtan',
        avatur: '',
        sex: '女',
        createTime: '2020年5月23日'
      }

    }
  }
</script>

<style scoped>
#profile {
    height: 100vh;
    position: relative;
  }
.profile-nav {
  background-color: var(--color-tint);
  color: white;

}
</style>
