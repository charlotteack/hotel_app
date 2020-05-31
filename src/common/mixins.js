import BackTop from 'components/content/backTop/BackTop.vue'
export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    listenBackTop(position) {
      this.isShowBackTop = -(position.y) > 1500
    },
    backClick() {
      this.$refs.scroll.myScrollTo(0, 0)
    }
  }
}