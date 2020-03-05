<template>
  <div>
    <div class="banner"
         @click="handleBannerClick">
      <img class="banner-img"
           :src="bannerImg"
           alt="">
      <div class="banner-info">
        <p class="banner-tittle">{{sightName}}</p>
        <div class="banner-number">
          <span class="iconfont iconzhaopian"></span>
          10
        </div>
      </div>
    </div>
    <fade-animation>
      <Common-gallary v-show="showGallary"
                      @close="handleGallaryClose"
                      :imgs='bannerImgs' />
    </fade-animation>
  </div>
</template>
<script>
import fadeAnimation from '../common/fadeAnimation'
import CommonGallary from '../common/gallary'
export default {
  name: 'detailBanner',
  components: {
    CommonGallary,
    fadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false,
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>
<style lang="scss" scoped>
.banner {
  position: relative;
  height: 0;
  overflow: hidden;
  padding-bottom: 55%;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    line-height: 80px;
    color: #fff;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .banner-tittle {
      flex: 1;
      font-size: 32px;
      padding: 10px;
    }
    .banner-number {
      height: 32px;
      line-height: 32px;
      margin: 30px 10px 10px 10px;
      padding: 4px 30px;
      border-radius: 15px;
      background: rgba(31, 26, 26, 0.5);
      font-size: 24px;
      .iconzhaopian {
        font-size: 24px;
      }
    }
  }
}
</style>