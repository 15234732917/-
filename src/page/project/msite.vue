<template>
  <div class="box">
    <head-top :signinUp="true" :headTitle="list.name" :gob="true"></head-top>
    <div class="middle">
      <div class="con">
        <!-- <mt-swipe :auto='2000' @change="handleChange">
              <mt-swipe-item v-for="(item,index) in foodTypes" :key="item.id">
                  <ul>
                      <router-link tag="li" :to="{path:'/food'}" v-for="foodItem in item" :key="foodItem.id">
                        <img :src="'https://fuss10.elemecdn.com'+foodItem.image_url">
                        <span>{{foodItem.title}}</span>
                      </router-link>
                  </ul>

              </mt-swipe-item>
        </mt-swipe>-->
        <div class="swiper-container" v-if="foodTypes.length">
          <ul class="swiper-wrapper">
            <li class="swiper-slide" v-for="(item,index) in foodTypes" :key="index">
              <router-link
                :to="{name:'food',params:{title:foodItem.title}}"
                v-for="foodItem in item"
                :key="foodItem.id"
                class="link_to_food"
              >
                <figure>
                  <img :src="'https://fuss10.elemecdn.com'+foodItem.image_url">
                  <figcaption>{{foodItem.title}}</figcaption>
                </figure>
              </router-link>
            </li>
          </ul>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="hr"></div>
      <div class="content">
        <p>
          <img src="../../images/src/11.png">
          <span>附近商家</span>
        </p>
        <zhi-hu></zhi-hu>
      </div>
     
    </div>
    <foo-ter></foo-ter>
  </div>
</template>

<script>

import ZhiHu from './zhihu'
import FooTer from "../../components/footer/footer";
import HeadTop from "../../components/header/head";
import Swiper from "Swiper";
import "../../style/swiper.min.css";
export default {
  components: {
    HeadTop,
    FooTer,
       ZhiHu
  },
  data() {
    return {
      list: "",
      foodTypes: []
    };
  },
  methods: {
    //  handleChange(index){
    //  }
   
  },

  mounted() {
    this.axios
      .get("http://elm.cangdu.org/v2/pois/" + this.$route.params.geohash)
      .then(res => {
        // console.log(res.data)
        if (res.data) {
          this.list = res.data;
        }
      });
    this.axios
      .get(
        "http://elm.cangdu.org/v2/index_entry?geohash=" +
          this.$route.params.geohash +
          "&group_type=1&flags"
      )
      .then(res => {
        if (res.data) {
          let len = res.data.length;
          let resArr = res.data;
          let foodArr = [];
          for (let i = 0, j = 0; i < len; i += 8, j++) {
            foodArr[j] = resArr.splice(0, 8);
          }
          this.foodTypes = foodArr;
        }
      })
      .then(() => {
        new Swiper(".swiper-container", {
          pagination: {
            el: ".swiper-pagination"
          },
          loop: true,
          autoplay: true
        });
      });
  }
};
</script>

<style lang="scss" scoped>
.box{
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
}
.middle {
  width: 100%;
  flex: 1;
  overflow: auto;
  .con {
    width: 100%;
    padding: 0.6rem 0.3rem;
    //  ul {
    //         width: 100%;
    //         list-style: none;
    //         display: flex;
    //         flex-wrap: wrap;
    //         li {
    //             width: 25%;
    //             text-align: center;
    //             img{
    //                 width: 3.3rem;
    //                 height: 3.3rem;
    //             }
    //             span{
    //                 font-size: 0.8rem;
    //                 display: block;
    //                 color: #767676;
    //             }

    //         }
    //  }                    
    &>div{
        width: 100%;
        ul {
            width: 100%;
            list-style: none;
            display: flex;
            li {
                width: 100%;
                text-align: center;
                display: flex;
                flex-wrap: wrap;
                .link_to_food{
                   width: 25%;
                   text-decoration: none;
                   figure{
                       width: 100%;
                       text-align: center;
                       img{
                           width: 2rem;
                           height: 2rem;
                       }
                       figcaption{
                           font-size: 0.5rem;
                           color: #c7c7c7;
                       }

                   }
                }
            
            }
        }
    }
  }
  .hr {
    width: 100%;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    background: #f5f5f5;
    height: 0.4rem;
  }
   .content {
    & > p {
      display: flex;
      padding: 0.2rem;
      span {
        display: block;
        font-size: 0.6rem;
        padding-top: 0.6rem;
        color: #c7c7c7;
      }
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
   }
    
  
}
// footer {
//   width: 100%;
//   height: 3rem;
//   ul {
//     padding: 0.4rem 0;
//     width: 100%;
//     height: 100%;
//     border-top: 1px solid #e4e4e4;
//     list-style: none;
//     display: flex;
//     li {
//       flex: 1;
//       text-align: center;
//       img {
//         width: 1rem;
//         height: 1rem;
//       }
//       span {
//         display: block;
//         font-size: 0.5rem;
//         color: #7b7b7b;
//       }
//     }
//   }
// }
</style>

