<template>
  <div class="wrapper">
    <swiper :options="swiperOption"
            v-if="showSwiper">
      <swiper-slide v-for="item of list "
                    :key="item.id">
        <img class="swiper-img"
             :src="item.imgUrl"
             alt="">
      </swiper-slide>
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'homeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  },
}
</script>
<style lang="scss" scoped>
.wrapper /deep/ .swiper-pagination-bullet-active {
  background: #fff !important;
}
.wrapper {
  // 因为初始高度是0，后加载会有抖动效果。所以此处用图片的高/宽拿到比例
  // 宽640，高200；200/640=0.3125=31.25%
  // width: 100%;
  // height: 0;
  // overflow: hidden;
  // padding-bottom: 31.25%
  width: 100%;
  height: 31.25vw;
  .swiper-img {
    width: 100%;
  }
}
</style>