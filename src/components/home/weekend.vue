<template>
  <div>
    <h3 class="title">热门推荐</h3>
    <ul>
      <li class="item border-bottom"
          v-for="item of list"
          :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img"
               :src="item.imgUrl"
               :alt="item.title">
        </div>
        <dl class="item-info">
          <dt class="item-title">{{item.title}}</dt>
          <dd class="item-desc">{{item.desc}}</dd>
        </dl>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
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

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 37.09%;
  .item-img {
    width: 100%;
  }
}

.item-info {
  padding: 10px 10px 30px;
  .item-title {
    margin-top: 10px;
    color: #212121;
  }
  .item-desc {
    line-height: 40px;
    color: #616161;
    margin-top: 10px;
    font-size: 26px;
  }
}
</style>