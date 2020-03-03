<template>
  <div class="search">
    <input type="text"
           class="search-input"
           v-model="keyword"
           placeholder="输入城市名或拼音">
    <div class="search-content"
         ref="search"
         v-show="keyword">
      <ul>
        <li v-for="item of list"
            :key="item.id"
            @click="handleCityClick(item.name)"
            class="search-item border-bottom">{{item.name}}</li>
        <li class="search-item border-bottom"
            v-show="hasNoData"> 没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  methods: {
    handleCityClick (val) {
      this.changeCity(val)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        let arr = []
        for (let i in this.cities) {
          this.cities[i].forEach(item => {
            if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
              arr.push(item)
            }
          });
        }
        this.list = arr
      }, 100)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/styles/varibles.scss";
.search {
  height: 68px;
  padding: 0 10px;
  background: $bgColor;
  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 57px;
    padding: 0 10px;
    line-height: 57px;
    text-align: center;
    border-radius: 10px;
    color: #666;
    border: none;
  }
  .search-content {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 150px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    .search-item {
      line-height: 62px;
      padding-left: 20px;
      background: #fff;
      color: #666;
      font-size: 20px;
    }
  }
}
</style>