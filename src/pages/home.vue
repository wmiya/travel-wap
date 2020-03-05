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
import { data } from '../../public/mock/index.json'

export default {
  name: 'Home',
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
      lastCity: '',
      list: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.lastCity = this.city;
    this.swiperList = data.swiperList
    this.iconList = data.iconList
    this.weekendList = data.weekendList;
    this.recommendList = data.recommendList;
    // this.getHomeInfo()
    // this.getListInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      // this.getHomeInfo()
      // this.getListInfo()
    }
  },
  methods: {
    async getListInfo () {
      let { status, data: { count, pois } } = await this.axios.get(`/search/resultsByKeywords`, {
        params: {
          keyword: '旅游',
          city: this.city
        }
      });
      if (status === 200 && count > 0) {
        let r = pois.filter(item => item.photos.length).map(item => {
          return {
            id: item.id,
            title: item.name,
            desc: item.type,
            imgUrl: item.photos[0].url,
          }
        })
        this.list = r.slice(0, 9)
      } else {
        this.list = []
      }
      this.weekendList = this.recommendList = this.list
    },
    async getHomeInfo () {
      let { data: { data } } = await this.axios.get(`/api/index.json?city=${this.city}`);
      if (data) {
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.weekendList = data.weekendList;
        this.recommendList = data.recommendList;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>