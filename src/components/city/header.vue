<template>
  <header class="header">
    城市选择
    <router-link to="/">
      <i class="header-left iconfont iconleft"
         href="javascript:;"></i>
    </router-link>
  </header>
</template>
<script>
export default {
  name: 'cityHeader'
}
</script>
<style lang="scss" scoped>
@import "../../assets/styles/varibles.scss";
.header {
  width: 100%;
  height: $headerHeight;
  background: $bgColor;
  color: #fff;
  line-height: $headerHeight;
  text-align: center;
  position: relative;
  .header-left {
    width: 80px;
    font-size: 40px;
    display: inline-block;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>