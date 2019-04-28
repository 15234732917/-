<template>
  <div class="box">
    <div class="main-body" ref="wrapper">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
        <router-link tag="dl" :to="'/shop/'+$route.params.geohash+'/'+item.id" v-for="item in food" class="mui-table-view-cell mui-media mui-col-xs-6">
        <!-- <dl v-for="item in food"> -->
          <dt>
            <img :src="'//elm.cangdu.org/img/'+item.image_path">
          </dt>
          <dd>
            <ul>
              <li>
                <p>
                  <span v-if="item.is_premium">品牌</span>
                  <span>{{item.name}}</span>
                </p>
                <p>
                  <span v-if="item.supports[0]">{{item.supports[0].icon_name}}</span>
                  <span v-if="item.supports[1]">{{item.supports[1].icon_name}}</span>
                  <span v-if="item.supports[2]">{{item.supports[2].icon_name}}</span>
                </p>
              </li>
              <li>
                <p>
                  <span>⭐⭐⭐⭐⭐</span>
                  <span>{{item.rating}}</span>
                  <span>月售{{item.recent_order_num}}单</span>
                </p>
                <p>
                  <span v-if="item.delivery_mode">{{item.delivery_mode.text}}</span>
                  <span>准时到</span>
                </p>
              </li>
              <li>
                <p>
                  <span>￥{{item.float_minimum_order_amount}}起送/{{item.piecewise_agent_fee.tips}}</span>
                </p>
                <p>
                  <span>{{item.distance}}/</span>
                  <span>{{item.order_lead_time}}</span>
                </p>
              </li>
            </ul>
          </dd>
          </router-link>
        <!-- </dl> -->
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-if="show">loading...</span>
          <span v-else>没有数据了</span>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import { Loadmore } from "mint-ui";
export default {
  data() {
    return {
      food: [],
      allLoaded: false,
      isAutoFill: false,
      show: true,
      n: 0
    };
  },
  mounted() {
    this.axios
      .get(
        "http://elm.cangdu.org/shopping/restaurants?latitude=39.99321&longitude=116.33855&offset=0&limit=30&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]="
      )
      .then(res => {
        this.allLoaded = false;
        this.food = res.data;
        // console.log(this.food);
        this.$refs.loadmore.onTopLoaded();
        // console.log(res.data)
      });
  },
  methods: {
    //  handleChange(index){

    //  }
    loadTop() {
      this.loadFrist();
    },
    loadBottom() {
      this.loadMore();
    },
    loadFrist() {},
    loadMore() {
      this.n += 3;
      this.axios
        .get(
          "http://elm.cangdu.org/shopping/restaurants?latitude=39.99321&longitude=116.33855&offset=" +
            this.n +
            "&limit=3&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]="
        )
        .then(res => {
          if (res.data.length < 10) {
            this.show = false;
          }
          this.food = this.food.concat(res.data);
          this.$refs.loadmore.onBottomLoaded();
        })
        .catch(error => {
          alert("网络错误，不能访问");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  .main-body {
    width: 100%;
    height: 100%;
    // overflow: scroll;
    overflow: auto;
    dl {
      width: 100%;
      display: flex;
      padding: 0.4rem 0.4rem;
      border-bottom: 1px solid #f3f3f3;
      dt {
        width: 20%;
        img {
          width: 3rem;
          height: 3rem;
        }
      }
      dd {
        width: 80%;
        padding: 0 0.2rem;
        & > ul {
          width: 100%;
          list-style: none;
          li:nth-of-type(1) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            p:nth-of-type(1) {
              display: flex;
              span:nth-of-type(1) {
                font-size: 0.1rem;
                font-weight: bold;
                display: block;
                padding: 0.1rem;
                background: #fed744;
              }
              span:nth-of-type(2) {
                font-size: 0.6rem;
                font-weight: bold;
                display: block;
                padding-left: 0.3rem;
              }
            }
            p:nth-of-type(2) {
              display: flex;
              transform: scale(.8);
              span:nth-of-type(1) {
                font-size: 0.3rem;
                display: block;
                color: #cccccc;
                border: 1px solid #cccccc;
              }
              span:nth-of-type(2) {
                font-size: 0.3rem;
                display: block;
                margin-left: 0.1rem;
                color: #cccccc;
                border: 1px solid #cccccc;
              }
              span:nth-of-type(3) {
                font-size: 0.3rem;
                display: block;
                margin-left: 0.1rem;
                color: #cccccc;
                border: 1px solid #cccccc;
              }
            }
          }
          li:nth-of-type(2) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            p:nth-of-type(1) {
              transform: scale(.8);
              margin-left: -0.7rem;
              span:nth-of-type(1) {
                font-size: 0.5rem;
                color: #fed744;
              }
              span:nth-of-type(2) {
                font-size: 0.5rem;
                color: #fc6120;
                padding-left: 0.1rem;
              }
              span:nth-of-type(3) {
                font-size: 0.4rem;
                padding-left: 0.1rem;
              }
            }
            p:nth-of-type(2) {
              display: flex;
              span:nth-of-type(1) {
                transform: scale(.8);
                font-size: 0.4rem;
                padding: 0.1rem;
                background: #3792e5;
                color: white;
              }
              span:nth-of-type(2) {
                font-size: 0.5rem;
                transform: scale(.8);
                border: 1px solid #3792e5;
                color: #3792e5;
              }
            }
          }
          li:nth-of-type(3) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            p:nth-of-type(1) {
              transform: scale(.8);
              margin-left: -0.4rem;
              span:nth-of-type(1) {
                font-size: 0.4rem;
                color: #767676;
              }
            }
            p:nth-of-type(2) {
               transform: scale(.8);
               margin-right: -0.3rem;
              span:nth-of-type(1) {
                font-size: 0.4rem;
                color: #9b9b9b;
                padding-left: 0.05rem;
              }
              span:nth-of-type(2) {
                font-size: 0.4rem;
                color: #87beef;
              }
            }
          }
        }
        //
      }
    }
  }
}
</style>
