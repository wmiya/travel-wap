<template>
  <div>
    <router-link tag="div"
                 to="/"
                 class="header-abs"
                 v-show="showAbs">
      <div class="iconfont iconleft"></div>
    </router-link>
    <div class="header-flex"
         v-show="!showAbs"
         :style="opacityStyle">
      <router-link to='/'>
        <i class="iconfont iconleft header-flex-icon"></i>
      </router-link>
      金湖杨国家森林公园
    </div>
  </div>
</template>
<script>
export default {
  name: 'deatilHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      },
      timer: null
    }
  },
  methods: {
    handleScroll () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const top = document.documentElement.scrollTop
        if (top > 60) {
          let opacity = top / 140
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = { opacity }
          this.showAbs = false
        } else {
          this.showAbs = true
        }
      }, 10)
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/styles/varibles.scss";
.header-abs {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 80px;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  color: #ffffff;
  .iconleft {
    font-size: 36px;
  }
}
.header-flex {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $headerHeight;
  line-height: $headerHeight;
  background: $bgColor;
  font-size: 32px;
  color: #ffffff;
  text-align: center;
  .header-flex-icon {
    position: absolute;
    top: 0;
    left: 10px;
    color: #ffffff;
  }
}
</style>