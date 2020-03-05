<template>
  <div>
    <city-header />
    <city-search :cities='cities' />
    <city-list :hot='hotCities'
               :list='cities'
               :letter='letter' />
    <city-alphabet @change='handleLetterChange' />
  </div>
</template>
<script>
import cityHeader from '../components/city/header'
import citySearch from '../components/city/search'
import cityList from '../components/city/list'
import cityAlphabet from '../components/city/alphabet'
import { data } from '../../public/mock/city.json'
export default {
  name: 'City',
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  mounted () {
    // this.getCityInfo()
    this.hotCities = data.hotCities
    this.cities = data.cities
  },
  methods: {
    async getCityInfo () {
      let { data: { ret, data } } = await this.axios.get('/api/city.json')
      if (ret && data) {
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleLetterChange (str) {
      this.letter = str
    }
  }
}
</script>
<style lang="scss" scoped>
</style>