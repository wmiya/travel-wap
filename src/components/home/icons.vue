<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages"
                    :key="index">

        <dl class="icon"
            v-for="item of page"
            :key="item.id">
          <dt>
            <img class="icon-img"
                 :src="item.imgUrl"
                 alt="">
          </dt>
          <dd class="icon-desc">{{item.desc}}</dd>
        </dl>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'homeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {

      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
}
</script>
<style lang="scss" scoped >
.icons /deep/ .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  padding-top: 10px;
  margin: 5px 0 15px;
  .icon {
    float: left;
    width: 25%;
    padding-bottom: 25%;
    position: relative;
    dt {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 44px;
      box-sizing: border-box;
      padding: 11px;
      .icon-img {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 44px;
      line-height: 44px;
      text-align: center;
    }
  }
}
</style>