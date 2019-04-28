<template>
  <div>
    <footer>
      <ul>
        <router-link tag="li" to="/msite/:geohash">
          <img src="../../images/src/19.jpg">
          <span>外卖</span>
        </router-link>
        <router-link tag="li" to="/search">
          <img src="../../images/src/20.jpg">
          <span>搜索</span>
        </router-link>
        <router-link tag="li" to="/order">
          <img src="../../images/src/21.jpg">
          <span>订单</span>
        </router-link>
        <router-link tag="li" to="/profile">
          <img src="../../images/src/22.jpg">
          <span>我的</span>
        </router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: 2.8rem;
  ul {
    padding: 0.4rem 0;
    width: 100%;
    height: 100%;
    border-top: 1px solid #e4e4e4;
    list-style: none;
    display: flex;
    li {
      flex: 1;
      text-align: center;
      img {
        width: 0.8rem;
        height: 0.8rem;
      }
      span {
        display: block;
        font-size: 0.4rem;
        color: #7b7b7b;
      }
    }
  }
}
</style>
