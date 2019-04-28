<template>
  <div>
    <!-- <header>
      <p>ele.me</p>
      <p></p>
      <p>
        <img src="../../images/src/2.png" alt>
      </p>
    </header> -->
     <head-top :signinUp="true"  :goback="false">
          <p slot="logo" class="head_logo">ele.me</p>
     </head-top>
    <div class="city">
      <div class="content">
        <p>
          <span>当前定位城市:</span>
          <span></span>
          <span>定位不准时，请在城市列表中选择</span>
        </p>
        <p>
          <router-link tag="span" to="/city">{{guess.name}}</router-link>
          <span></span>
          <!-- <span><img src="../../static/src/15.png"></span> -->
          <span>
            <img src="../../images/src/15.png">
          </span>
        </p>
      </div>
      <div class="hr"></div>
      <div class="con">
        <p>热门城市</p>
        <ul>
            <!-- <li v-for="item in hot">{{item.name}}</li> -->
            <router-link tag="li" :to="{name:'city',params:{cityid:item.id}}" :keys="item.id" v-for="item in hot">{{item.name}}</router-link>
        </ul>
      </div>
      <div class="coe" v-for="(i,index) in sortgroupcity">
        <div class="hr"></div>

        <p>
          {{index}}
          <span>(按字母排序)</span>
        </p>
        <ul>
          <!-- <li v-for="item in group[index]">{{item.name}}</li> -->
          <router-link tag="li" :to="{name:'city',params:{cityid:item.id}}" :keys="item.id" v-for="item in group[index]">{{item.name}}</router-link>
           
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeadTop from '../../components/header/head'
export default {
  components:{
     HeadTop
  },
  
  data() {
    return {
      headTitle:'',
      goback:false,
      signinUp:false,
      guess: [],
      hot: [],
      group: []
    };
  },
  mounted() {
    this.axios.get("http://elm.cangdu.org/v1/cities?type=guess").then(res => {
      //   console.log(res);
      if (res.data) {
        this.guess = res.data;
      }
    });
    this.axios.get("http://elm.cangdu.org/v1/cities?type=hot").then(res => {
      //   console.log(res);
      if (res.data) {
        this.hot = res.data;
      }
    });
    this.axios.get("http://elm.cangdu.org/v1/cities?type=group").then(res => {
      //   console.log(res);
      if (res.data) {
        this.group = res.data;
      }
    });
    //  this.axios.get("http://elm.cangdu.org/v1/cities/id").then(res => {
    //   console.log(res);
    //   if (res.data) {
    //     this.group = res.data;
    //   }
    // });
  },
  computed: {
    sortgroupcity() {
      let sortobj = {};
      for (let i = 65; i <= 90; i++) {
        if (this.group[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.group[String.fromCharCode(i)];
        }
      }
      return sortobj;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  p {
    font-size: 1rem;
    color: white;
  }
}
.city {
  width: 100%;
  .content {
    width: 100%;
    & > p:nth-of-type(1) {
      width: 100%;
      height: 2.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.8rem 0.6rem 0.3rem 0.6rem;
      border-bottom: 1px solid #cccccc;
      span {
        display: block;
        font-size: 0.6rem;
        color: #bebebe;
      }
    }
    p:nth-of-type(2) {
      width: 100%;
      height: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.3rem 0.5rem;
      span {
        display: block;
        font-size: 0.8rem;
        color: #3792e5;
        img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
  .hr {
    width: 100%;
    height: 0.8rem;
    background: #f5f5f5;
    border-bottom: 1px solid #f2f2f2;
    border-top: 1px solid #f2f2f2;
  }
  .con {
    width: 100%;
    p {
      font-size: 0.7rem;
      color: #6d6d6d;
      padding: 0.3rem;
    }
    ul {
      width: 100%;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      border-top: 1px solid #e4e4e4;
      li {
        width: 25%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 2rem;
        font-size: 0.7rem;
        text-align: center;
        color: #3792e5;
        border-bottom: 1px solid #e4e4e4;
        border-right: 1px solid #e4e4e4;
      }
    }
  }
  .coe {
    width: 100%;
    p {
      font-size: 0.7rem;
      color: #6d6d6d;
      padding: 0.3rem;
      span {
        font-size: 0.6rem;
        color: #b7b7b7;
      }
    }
    ul {
      width: 100%;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      border-top: 1px solid #e4e4e4;
      li {
        width: 25%;
        font-size: 0.6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 1.8rem;
        text-align: center;
        color: #666666;
        border-bottom: 1px solid #e4e4e4;
        border-right: 1px solid #e4e4e4;
      }
    }
  }
}
</style>
