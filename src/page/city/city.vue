<template>
  <div>
    <!-- <header>
      <p><</p> 
      <p>{{list.name}}</p>
      <router-link tag="p" to="/home">切换城市</router-link>
    </header>-->
    <head-top :headTitle="list.name" :goback="true">
      <router-link tag="p" to="/home" slot="changecity">切换城市</router-link>
    </head-top>
    <div class="content">
      <div class="con">
        <p>
          <input type="text" placeholder="输入学校、商务楼、地址" v-model="search">
        </p>
        <p>
          <button @click="submit">提交</button>
        </p>
      </div>
      <div class="coe">
        <p v-if="historytitle">搜索历史</p>
      </div>
      <div class="coo">
        <p v-for="(item,index) in placelist" @click="nextpage(index,item)" :key="index">
          <span>{{item.name}}</span>
          <span>{{item.address}}</span>
        </p>
      </div>
      <div class="del" v-if="historytitle&&placelist.length" @click="empty">清空所有</div>
      <div class="placenone" v-show="placenone">很抱歉！无搜索结果</div>
    </div>
  </div>
</template>

<script>
import HeadTop from "../../components/header/head";
export default {
  components: {
    HeadTop
  },
  data() {
    return {
      headTitle: "",
      goback: false,
      signinUp: false,
      list: "",
      search: "",
      placeHistory: [],
      placelist: [],
      historytitle: true,
      placenone: false
    };
  },
  // beforeMount() {
  //   if(this.$store.state.goods){
  //     this.history=this.$store.state.goods;
  //     if(this.history!=''){
  //       this.emp=true
  //     }else{
  //       this.emp=false
  //     }
  //   }
  // },
  methods: {
    submit() {
      if (this.search) {
        this.axios.get("http://elm.cangdu.org/v1/pois?type=search&city_id=" +this.$route.params.cityid +"&keyword=" +this.search)
        .then(res => {
            if (res.data) {
              //获得了搜素结果
              this.placelist = res.data;
              this.historytitle = false;
            }else{
              this.placenone=true;
            }
          })
      }else{
        this.placenone=true;
      }
    },
    nextpage(index, item) {
      let history = localStorage.getItem("placeHistory");
      if (history) {
        let checkrepeat = false;
        this.placeHistory = JSON.parse(history);
        this.placeHistory.forEach(i => {
          if (i.address == item.address) {
            checkrepeat = true;
          }
        });
        if (checkrepeat == false) {
          this.placeHistory.push(item);
          // localStorage.setItem("placeHistory",JSON.stringify(this.placeHistory));
        }
      } else {
        this.placeHistory.push(item);
      }
      localStorage.setItem("placeHistory", JSON.stringify(this.placeHistory));
      this.$router.push({
        name: "msite",
        params: { geohash: this.placelist[index].geohash }
      });
      // console.log(this.placeHistory)
    },
    in() {
      if (localStorage.getItem("placeHistory")) {
        this.placelist = JSON.parse(localStorage.getItem("placeHistory"));
      } else {
        this.placelist = [];
      }
    },
    empty() {
      localStorage.removeItem("placeHistory");
      this.placelist = [];
      this.historytitle = false;
    }
  },
  mounted() {
    // console.log(this.$route.params.cityid);
    this.axios
      .get("http://elm.cangdu.org/v1/cities/" + this.$route.params.cityid)
      .then(res => {
        //   console.log(res);
        if (res.data) {
          this.list = res.data;
          //   console.log(this.list)
        }
      });
    this.in();
  }
};
</script>

<style lang="scss" scoped>
header {
  p {
    font-size: 0.5rem;
    font-weight: bold;
    color: white;
  }
}
.content {
  width: 100%;
  background: #f5f5f5;
  .con {
    width: 100%;
    background: white;
    padding: 0.4rem;
    p:nth-of-type(1) {
      width: 100%;
      text-align: center;
      input {
        width: 96%;
        height: 1.6rem;
        border-radius: 0.3rem;
        border: 1px solid #eeeeee;
        padding-left: 0.5rem;
        outline: none;
      }
    }
    p:nth-of-type(2) {
      width: 100%;
      text-align: center;
      padding-top: 0.3rem;
      button {
        width: 96%;
        height: 1.6rem;
        border-radius: 0.3rem;
        border: none;
        outline: none;
        font-size: 0.6rem;
        background: #3792e5;
        color: white;
      }
    }
  }
  .coe {
    width: 100%;
    background: #f5f5f5;
    padding: 0.1rem 0;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
    p {
      font-size: 0.6rem;
      padding-left: 0.6rem;
    }
  }
  .coo {
    width: 100%;
    background: white;
    p {
      width: 100%;
      padding: 0.2rem;
      border-bottom: 1px solid #cccccc;
      span:nth-of-type(1) {
        display: block;
        padding: 0.5rem 0 0 0.6rem;
        font-size: 0.6rem;
        color: #030303;
      }
      span:nth-of-type(2) {
        display: block;
        font-size: 0.6rem;
        padding: 0.5rem 0 0.5rem 0.6rem;
        color: #c6c6c6;
      }
    }
  }
  .del {
    width: 100%;
    padding: 0.5rem 0.3rem;
    text-align: center;
    font-size: 0.6rem;
    color: #cccccc;
    background: white;
  }
}
</style>
