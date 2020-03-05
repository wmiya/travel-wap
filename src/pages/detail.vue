<template>
  <div class="mp-page">
    <deatil-banner :sightName="sightName"
                   :bannerImg="bannerImg"
                   :bannerImgs="gallaryImgs" />
    <deatil-header />
    <deatil-baseinfo />
    <deatil-list :list='list' />
  </div>
</template>
<script>
import deatilBanner from '../components/detail/banner'
import deatilHeader from '../components/detail/header'
import deatilBaseinfo from '../components/detail/baseinfo'
import deatilList from '../components/detail/list'

export default {
  name: 'Detail',
  components:
  {
    deatilBanner,
    deatilHeader,
    deatilBaseinfo,
    deatilList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    async getDetailInfo () {
      let { data: { ret, data } } = await this.axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
      if (ret && data) {
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/styles/varibles.scss";
.mp-page {
  background: $pgColor;
}
</style>