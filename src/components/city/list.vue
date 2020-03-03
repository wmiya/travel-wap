<template>
  <div class="list"
       ref="wrapper">
    <div class="area">
      <h2 class="title border-topbottom">您的位置</h2>
      <ul class="button-list">
        <li class="button self">{{this.city}}</li>
      </ul>
      <h2 class="title border-topbottom">热门城市</h2>
      <ul class="button-list">
        <li class="button"
            href="javascript:;"
            v-for="item of hot"
            @click="handleCityClick(item.name)"
            :key="item.id">{{item.name}}</li>
      </ul>
      <div>
        <template v-for="(items,key) of list">
          <h2 class="title"
              :ref="key"
              :key="key">{{key}}</h2>
          <ul class="button-list city"
              :key="key+1">
            <li class="item"
                v-for="item of items"
                @click="handleCityClick(item.name)"
                :key="item.id">{{item.name}}</li>
          </ul>
        </template>

      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  props: {
    hot: Array,
    list: Object,
    letter: String
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    handleCityClick (val) {
      this.changeCity(val)
      this.$router.push('/')

    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter (newVal) {
      let element = this.$refs[newVal]
      if (newVal && element) {
        this.scroll.scrollToElement(element[0])
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/styles/varibles.scss";

.border-topbottom {
  &:before {
    border-color: #ccc;
  }
  &:after {
    border-color: #ccc;
  }
}
.list {
  overflow: hidden;
  position: absolute;
  top: 150px;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 26px;
  .area {
    overflow: hidden;
    .title {
      height: 68px;
      line-height: 68px;
      background: #eee;
      color: #666666;
      padding-left: 20px;
    }
    .button-list {
      overflow: hidden;
      padding: 20px 30px 20px 20px;
      .button {
        float: left;
        width: 190px;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        color: #000;
        text-align: center;
        border: 2px solid #ccc;
        border-radius: 6px;
        margin: 10px;
      }
      .self {
        border-color: $bgColor;
        color: $bgColor;
      }
      .item {
        display: block;
        line-height: 76px;
        padding-left: 20px;
        border-bottom: 1px solid #ccc;
      }
    }
    .city {
      padding: 20px 0 0;
    }
  }
}
</style>