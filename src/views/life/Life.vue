<template>
  <div class="life">
    <life-tab>
      <life-cook slot="cook"></life-cook>
      <life-exercise slot="exercise"></life-exercise>
      <life-visit slot="visit"></life-visit>
    </life-tab>

    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar'
  import LifeTab from './childcomponents/LifeTab'
  import LifeCook from './childcomponents/LifeCook'
  import LifeExercise from './childcomponents/LifeExercise'
  import LifeVisit from './childcomponents/LifeVisit'
  export default {
    name: "Life",
    components: {
      LifeTab,
      LifeCook,
      LifeExercise,
      LifeVisit,
      MainTabBar
    },

  }
</script>

<style scoped>

</style>
