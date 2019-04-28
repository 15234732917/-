<template>
  <div class="box">
    <div class="content">
        <transition name="router-fade" mode="out-in">
            <!-- <keep-alive> -->
              <router-view></router-view>
            <!-- </keep-alive> -->
        </transition>
      </div>
  </div>
</template>

<script>
// import FooTer from './components/footer/footer'
export default {
   components:{
    // FooTer
  }
}
</script>

<style lang="scss">
// @import './style/common.scss';    //在css文件中   
.router-fade-enter-active,.router.fade-leave.active{
  transition: opacity .3s;
}
.router-fade-enter,.router-fade-leave-active{
  opacity:0;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Microsoft Yahei;
}
html,body,.box{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content{
  width: 100%;
  flex: 1;
  overflow: auto;
}
</style>
