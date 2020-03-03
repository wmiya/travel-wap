<template>
  <header class="header">
    <a class="header-left iconfont iconleft"
       href="javascript:;"></a>
    <div class="header-input">
      <span class="iconfont iconmagnifier"></span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="city">
      <p class="header-right">{{this.city}}</p>
    </router-link>
  </header>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['city'])
  },
}
</script>
<style lang="scss" scoped>
@import "../../assets/styles/varibles.scss";
.header {
  display: flex;
  width: 100%;
  height: 84px;
  background: $bgColor;
  color: #fff;
  line-height: 84px;
  .header-left {
    width: 80px;
    text-align: center;
    font-size: 40px;
    display: inline-block;
    color: #fff;
    span {
      padding-top: -1px;
    }
  }
  .header-input {
    flex: 1;
    display: flex;
    align-items: center;
    height: 60px;
    margin: 12px 0;
    background: #fff;
    border-radius: 8px;
    color: #e4e7ea;
    line-height: 52px;
    text-indent: 20px;
    font-size: 27px;
    span {
      display: inline-block;
    }
  }
  .header-right {
    min-width: 107px;
    padding: 0 5px;
    float: right;
    margin: 0 5px 0 13px;
    font-size: 27px;
    color: #fff;
    &::after {
      content: "";
      width: 0;
      height: 0;
      padding-top: 5px;
      margin-left: 8px;
      display: inline-block;
      border-top: 10px solid #fff;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
    }
  }
}
</style>