<template>
  <div class="baseinfo">
    <div class="baseinfo-flexbox">
      <div class="baseinfo-flexbox-item">
        <div class="flexbox-top">
          <span class="commentcard-score">5.9</span>
          <span class="commentcard-text">分</span>
          <span class="commentcard-desc">超赞</span>
        </div>
        <div class="flexbox-bottom">
          32条评论
          <span class="iconfont iconcc-right"></span>
        </div>
      </div>
      <div class="baseinfo-flexbox-item  right">
        <div class="flexbox-top">
          景点简介
        </div>
        <div class="flexbox-bottom ">
          开放时间、贴士
          <span class="iconfont iconcc-right"></span>
        </div>
      </div>
    </div>
    <div class="baseinfo-address">
      <span class="iconfont">&#xe732;</span>
      新疆喀什地区泽普县奎依巴格乡亚斯墩林场(泽普县西南40公里处)
      <span class="iconfont iconcc-right"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'detailBaseinfo'
}
</script>
<style lang="scss" scoped>
.baseinfo {
  position: relative;
  top: -10px;
  padding: 20px 20px;
  margin-bottom: 10px;
  background: #fff;
  border-radius: 10px 10px 0 0;
  .baseinfo-flexbox {
    display: flex;
    overflow: hidden;
    .baseinfo-flexbox-item {
      flex: 1;
      position: relative;
      .flexbox-top {
        color: #ff8300;
        font-size: 26px;
        line-height: 48px;
        .commentcard-score {
          font-size: 38px;
          line-height: 44px;
        }
        .commentcard-desc {
          margin-left: 15px;
        }
      }
      .flexbox-bottom {
        font-size: 24px;
        color: #9e9e9e;
        line-height: 32px;
        margin-right: 20px;
        .iconcc-right {
          position: absolute;
          top: 10px;
          right: 10px;
        }
      }
    }
    .right {
      box-sizing: border-box;
      border-left: 1px solid #e0e0e0;
      padding-left: 20px;
      margin-left: 10px;
      .flexbox-top {
        color: #000;
      }
      &::before {
        border-left: 1px solid #eee;
      }
    }
  }
  .baseinfo-address {
    border-top: 1px solid #f0f0ef;
    font-size: 26px;
    display: flex;
    padding-top: 30px;
    margin-top: 30px;
    .iconfont {
      color: #9e9e9e;
      margin: 0 10px 0 0;
    }
  }
}
</style>