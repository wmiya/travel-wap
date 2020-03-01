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
import axios from 'axios'
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
      weekendList: []
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    async getHomeInfo () {
      let { data: { data } } = await axios.get('/mock/index.json');
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