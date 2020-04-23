<template>
  <ul class="list">
    <li v-for="item of list "
        :key="item"
        :ref="item"
        class="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick">{{item}}</li>
  </ul>
</template>
<script>
export default {
  name: 'cityAlphabet',
  data () {
    return {
      list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop;
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)

    },
    handleTouchStart () {
      // 开始
      this.touchStatus = true
    },
    handleTouchMove (e) {
      // 过程中
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const clientY = e.touches[0].clientY - 71;
          const index = Math.floor((clientY - this.startY) / 18);
          if (index >= 0 && index < this.list.length) {
            this.$emit('change', this.list[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      // 结束
      this.touchStatus = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/styles/varibles.scss";
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 158px;
  right: 0;
  bottom: 0;
  width: 40px;
  .item {
    line-height: 36px;
    text-align: center;
    color: $bgColor;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>