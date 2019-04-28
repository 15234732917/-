<template>
  <div class="box">
    <head-top :goback="true" :signinUp="false">
      <p slot="search" class="head_logo">我的</p>
      <p slot="sear"></p>
    </head-top>
    <div class="content"></div>
    <foo-ter></foo-ter>
  </div>
</template>

<script>
import FooTer from "../../components/footer/footer";
import HeadTop from "../../components/header/head";
export default {
  components: {
    HeadTop,
    FooTer
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    p {
      font-size: 1rem;
      color: white;
      font-weight: bold;
      padding-right: 0.8rem;
    }
  }
  .content {
    width: 100%;
    background: #f5f5f5;
    flex: 1;
    overflow: auto;
  }
}
</style>
