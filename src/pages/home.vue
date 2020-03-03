<template>
  <div>
    <home-header />
    <home-swiper :list='swiperList' />
    <home-icons :list='iconList' />
    <home-recommend :list='recommendList' />
    <home-weekend :list='weekendList' />
  </div>
</template>
<script>
import homeHeader from '../components/home/header'
import homeSwiper from '../components/home/swiper'
import homeIcons from '../components/home/icons'
import homeRecommend from '../components/home/recommend'
import homeWeekend from '../components/home/weekend'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.lastCity = this.city;
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo()
    }
  },
  methods: {
    async getHomeInfo () {
      let { data: { data } } = await this.axios.get(`/api/index.json?city=${this.city}`);
      if (data) {
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>