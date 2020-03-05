<template>
  <div>
    <h3 class="title">热门推荐</h3>
    <ul>
      <router-link tag="li"
                   class="item border-bottom"
                   v-for="item of list"
                   :key="item.id"
                   :to="`detail/${item.id}`">
        <img class="item-img"
             :src="item.imgUrl"
             :alt="item.title">
        <dl class="item-info">
          <dt class="item-title">{{item.title}}</dt>
          <dd class="item-desc">{{item.desc}}</dd>
          <dd class="item-button">查看详情</dd>
        </dl>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'homeRecommend',
  props: {
    list: Array
  }
}
</script>
<style lang="scss" scoped>
.title {
  height: 80px;
  line-height: 80px;
  background: #eee;
  text-indent: 20px;
}
ul {
  padding: 10px 15px 0;
}
.item {
  display: flex;
  height: 190px;
  overflow: hidden;
  padding: 10px 0px;
  .item-img {
    width: 170px;
    height: 170px;
    padding: 10px;
  }
  .item-info {
    flex: 1;
    padding: 10px;
    .item-title {
      margin-top: 10px;
    }
    .item-desc {
      line-height: 40px;
      color: #ccc;
      margin-top: 10px;
      font-size: 26px;
    }
    .item-button {
      display: inline-block;
      padding: 8px 10px;
      margin-top: 10px;
      background: #ff9300;
      border-radius: 8px;
      color: #fff;
    }
  }
}
</style>