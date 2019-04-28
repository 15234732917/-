<template>
  <div class="box">
    <header>
      <span class="user_lift" @click="back">
        <i class="fa fa-fw fa-chevron-left"></i>
      </span>
      <dl>
        <dt>
          <img :src="'http://elm.cangdu.org/img/'+this.userlist.image_path">
        </dt>
        <dd>
          <p>{{this.userlist.name}}</p>
          <p>
            <span>商家配送/</span>
            <span>分钟送达/</span>
            <span>配送费￥1</span>
          </p>
          <p>公告：{{this.userlist.promotion_info}}</p>
        </dd>
      </dl>
      <p class="bbb" v-if="activity">
        <span>{{this.activitylist.icon_name}}</span>
        <span>{{this.activitylist.description}}(APP专享)</span>
      </p>
    </header>
    <div class="coe">
      <ul>
        <li>商品</li>
        <li>评价</li>
      </ul>
    </div>
    <section>
      <div class="con">
        <div class="left" ref="left">
          <ul>
            <li
              v-for="(item,index) in shop"
              :key="index"
              :class="{click:selector==index}"
              @click="toHash(item,index)"
            ><a :href="'#'+item.id">{{item.name}}</a></li>
          </ul>
        </div>
        <div class="right" @scroll="listScroll">
          <ul>
            <li v-for="(good,index1) in shop" :key="index1" :id="good.name">
              <h1 class="goodTitle">
                <a :name="good.id">{{good.name}}</a>
                <span>{{good.description}}</span>
              </h1>
              <ul class="good" v-for="(item,index2) in good.foods" :key="index2">
                <li>
                  <dl>
                    <dt>
                      <img :src="'//elm.cangdu.org/img/'+item.image_path">
                    </dt>
                    <dd>
                      <h2>{{item.name}}</h2>
                      <p>{{item.description}}</p>
                      <p>{{item.tips}}</p>
                      <!-- <p>
                        <span v-for="i in it.specfoods">￥{{i.price}}</span>
                      </p>-->
                    </dd>
                  </dl>
                </li>
                <li>
                  <div class="pre">
                    <span>￥</span>
                    <span v-if="index3==0" v-for="(i,index3) in item.specfoods">{{i.price}}</span>起
                  </div>
                  <div>
                    <div :class="{pop: true, mov: item.__v>0}">
                      <i class="fa fa-fw fa-minus-circle" @click="reduce(item)"></i>
                      {{item.__v}}
                    </div>
                    <i class="fa fa-fw fa-plus-circle" @click="increase(item, $event)"></i>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <!-- <div class="aa" v-for="(item,index1) in shop" :key="index1">
            <h1 class="goodTitle">
              {{item.name}}
              <span>{{item.description}}</span>
            </h1>
            <dl v-for="(it,index2) in item.foods" :key="index2">
              <dt>
                <img :src="'//elm.cangdu.org/img/'+it.image_path">
              </dt>
              <dd>
                <h2>{{it.name}}</h2>
                <p>{{it.description}}</p>
                <p>{{it.tips}}</p>
                <p>
                  <span v-for="i in it.specfoods">￥{{i.price}}</span>
                </p>
              </dd>
            </dl>
          </div>-->
        </div>
      </div>
    </section>

     <!-- 运动的小球 -->
    <div id="points">
      <div class="pointOuter pointPre">
        <div class="point-inner"></div>
      </div>
      <div class="pointOuter pointPre">
        <div class="point-inner"></div>
      </div>
      <div class="pointOuter pointPre">
        <div class="point-inner"></div>
      </div>
      <div class="pointOuter pointPre">
        <div class="point-inner"></div>
      </div>
      <div class="pointOuter pointPre">
        <div class="point-inner"></div>
      </div>
      <div class="pointOuter pointPre">
        <div class="point-inner"></div>
      </div>
      <div class="pointOuter pointPre">
        <div class="point-inner"></div>
      </div>
    </div>

    <div class="footer">
      <div>
        <i class="fa fa-fw fa-shopping-cart"></i>
        <!--记录订单总数  -->
        <div class="total" v-show="total>0">{{total}}</div>
      </div>
      <div :class="{pay: true, notPay: total==0}">去结算</div>
    </div>
    <!-- <footer>
      <div>
        <i class="fa fa-fw fa-shopping-cart"></i>
        <div class="total" v-show="total>0">{{total}}</div>
        <p>
          <span>￥0.00</span>
          <span>配送费￥5</span>
        </p>
      </div>
      <div :class="{pay:true,notPay:total==0}">
        <p>去结算</p>
      </div>
    </footer> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      shop: [],
      userlist: "",
      activitylist: "",
      activity: true,
      selector: 0,
      total: 0
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    toHash(item, index) {
      this.selector = index;
      window.location.hash = item;
      this.$refs.left.scrollTop = (index > 7 ? index - 7 : 0) * 54;
    },
     increase(item, event) {
      this.total++;
      item.__v++;

      // 小球动画
      var top = event.clientY, // 小球降落起点
        left = event.clientX,
        endTop = window.innerHeight - 30, // 小球降落终点
        endLeft = 20;

      // // 小球到达起点
      var outer = $("#points .pointPre")
        .first()
        .removeClass("pointPre")
        .css({
          left: left + "px",
          top: top + "px"
        });
      var inner = outer.find(".point-inner");

      setTimeout(function() {
        // 将jquery对象转换为DOM对象
        outer[0].style.webkitTransform =
          "translate3d(0," + (endTop - top) + "px,0)";
        inner[0].style.webkitTransform =
          "translate3d(" + (endLeft - left) + "px,0,0)";

        // 小球运动完毕恢复到原点
        setTimeout(function() {
          outer.removeAttr("style").addClass("pointPre");
          inner.removeAttr("style");
        }, 1000); //这里的延迟值和小球的运动时间相关
      }, 1);
    },
    reduce(item) {
      this.total--;
      item.__v--;
    },
    // 右侧菜单滑动
    listScroll() {
      // 为了达到联动效果，右侧滑动则改变左侧导航栏样式
      var titles = document.getElementsByClassName("goodTitle");

      for (var i = 0; i < titles.length; i++) {
        var style = titles[i].getBoundingClientRect();
        // console.log(style.top)
        if (titles[i].getBoundingClientRect().top == 107) {
          this.toHash(titles[i].innerHTML, i);
        }
      }
    }
  },
  mounted() {
    //头部
    this.axios
      .get(
        "http://elm.cangdu.org/shopping/restaurant/" +
          this.$route.params.id +
          "?latitude=26.70908&longitude=113.25874&extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics"
      )
      .then(res => {
        if (res.data && res.data.activities.length > 0) {
          this.userlist = res.data;
          this.activitylist = res.data.activities[0];
          // console.log(res.data)
          // console.log(this.userlist.activities.length)
        } else {
          this.userlist = res.data;
          this.activity = false;
        }
      });
    //商品内容
    this.axios
      .get(
        "http://elm.cangdu.org/shopping/v2/menu?restaurant_id=" +
          this.$route.params.id
      )
      .then(res => {
        this.shop = res.data;
        // console.log(this.shop)
      });
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
  color: #555;
}
.box {
  width: 100%;
  height: 100%;
}
header {
  width: 100%;
  height: 5rem;
  background-color: rgba(150, 150, 150, 0.3);
  position: relative;
  .user_lift {
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    color: white;
  }
  dl {
    display: flex;
    color: white;
    width: 100%;
    dt {
      width: 20%;
      padding: 0.5rem 0 0 0.5rem;
      img {
        width: 3rem;
        height: 3rem;
      }
    }
    dd {
      width: 80%;
      padding: 0.2rem 0 0 0.3rem;
      p {
        margin-top: 0.3rem;
      }
      p:nth-of-type(1) {
        font-weight: bold;
        font-size: 0.8rem;
      }
      p:nth-of-type(2) {
        font-size: 0.6rem;
      }
      p:nth-of-type(3) {
        font-size: 0.6rem;
      }
    }
  }
  .bbb {
    width: 100%;
    padding: 0.2rem 0.5rem;
    height: 1rem;
    display: flex;
    span:nth-of-type(1) {
      color: red;
      font-size: 0.5rem;
    }
    span:nth-of-type(2) {
      padding-left: 0.3rem;
      font-size: 0.6rem;
    }
    span:nth-of-type(3) {
      font-size: 0.6rem;
    }
  }
}
.coe {
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    list-style: none;
    padding: 0.5rem 0.3rem;
    li {
      flex: 1;
      text-align: center;
      font-size: 1rem;
      &:hover {
        color: #3792e5;
      }
    }
  }
}
section {
  width: 100%;
  flex: 1;
  overflow: auto;
  .con {
    width: 100%;
    display: flex;
    .left {
      width: 25%;
      max-height: 40rem;
      overflow: hidden;
      overflow: auto;
      background: #f3f5f7;
      overflow: scroll;
      & > ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        list-style: none;
        li {
          padding: 0.8rem 0;
          text-align: center;
          border-bottom: 1px solid #ccc;
          font-size: 0.8rem;
          
        }
        .click {
          background: #fff;
        }
      }
    }
    .right {
      width: 75%;
      max-height: 40rem;
      overflow: hidden;
      overflow: auto;
      flex: 1;
      overflow: scroll;
      ul {
        list-style: none;
        width: 100%;
        li {
          width: 100%;
          h1 {
            background: #eeeeee;
            font-size: 0.8rem;
            padding: 0.6rem 0.2rem;
            span {
              font-size: 0.7rem;
              color: #cccccc;
            }
          }
          dl {
            display: flex;
            padding: 0.5rem;
            background-color: #fff;
            dt {
              width: 30%;
              img {
                width: 3.5rem;
              }
            }
            dd {
              width: 70%;
              h2 {
                font-size: 0.8rem;
                padding-top: 0.3rem;
              }
              p:nth-of-type(1) {
                font-size: 0.6rem;
                color: #cccccc;
                padding-top: 0.3rem;
              }
              p:nth-of-type(2) {
                font-size: 0.6rem;
                padding-top: 0.3rem;
              }
            }
          }
        }
        li:nth-of-type(2) {
          .pre {
            padding-left: 4.3rem;
            color: gainsboro;
            font-size: 0.7rem;
            span {
              color: orange;
              font-size: 0.7rem;
              font-weight: bold;
              margin-right: 0.3rem;
            }
            span:nth-of-type(1) {
              font-size: 0.5rem;
              margin-right: 0.1rem;
            }
          }
        }
      }
      // .aa {
      //   width: 100%;
      //   h1 {
      //     background: #eeeeee;
      //     font-size: 0.8rem;
      //     padding: 0.6rem 0.2rem;
      //     span {
      //       font-size: 0.7rem;
      //       color: #cccccc;
      //     }
      //   }

      //   dl {
      //     display: flex;
      //     padding: 0.5rem;
      //     background-color: #fff;
      //     dt {
      //       width: 30%;
      //       img {
      //         width: 3.5rem;
      //       }
      //     }
      //     dd {
      //       width: 70%;
      //       h2 {
      //         font-size: 0.8rem;
      //         padding-top: 0.3rem;
      //       }
      //       p:nth-of-type(1) {
      //         font-size: 0.6rem;
      //         color: #cccccc;
      //         padding-top: 0.3rem;
      //       }
      //       p:nth-of-type(2) {
      //         font-size: 0.6rem;
      //         padding-top: 0.3rem;
      //       }
      //       p:nth-of-type(3) {
      //         span {
      //           font-size: 0.6rem;
      //           color: chocolate;
      //           font-weight: bold;
      //           padding-top: 0.3rem;
      //         }
      //       }
      //     }
      //   }
      // }
    }
  }
}
// footer {
//   width: 100%;
//   height: 2.5rem;
//   background: #333333;
//   display: flex;
//   div:nth-of-type(1) {
//     width: 65%;
//     display: flex;
//     i {
//       font-size: 2rem;
//       color: #fff;
//       padding-left: 0.5rem;
//     }
//     & > div {
//     }
//     // p {
//     //   padding-left: 1rem;
//     //   span:nth-of-type(1) {
//     //     display: block;
//     //     font-size: 1rem;
//     //     color: white;
//     //     font-weight: bold;
//     //   }
//     //   span:nth-of-type(2) {
//     //     display: block;
//     //     font-size: 0.6rem;
//     //     color: white;
//     //     font-weight: bold;
//     //   }
//     // }
//   }
//   div:nth-of-type(2) {
//     background: #555555;
//     width: 35%;
//     p {
//       font-weight: bold;
//       font-size: 0.9rem;
//       text-align: center;
//       line-height: 2.5rem;
//       color: white;
//     }
//   }
// }

.right li h1 {
  padding-left: 5%;
  background-color: #f3f5f7;
  position: sticky;
  top: 0;
  z-index: 10;
}
.good li:nth-of-type(2) {
  font-size: 18px;
  text-align: right;
  display: flex;
  justify-content: space-between;
}
.good li i {
  font-size: 18px;
  color: #00a0dc;
  padding: 0 4px;
}
.pop {
  display: inline-block;
  position: relative;
  left: 48px;
  opacity: 0;
  transition: all ease 0.5s;
}
.pop i {
  transform: rotate(0deg);
  transition: all ease 0.5s;
}
.mov {
  left: 0;
  opacity: 1;
}
.pop.mov i {
  transform: rotate(-360deg);
}
.good li > div > i {
  position: relative;
  background-color: #fff;
  // z-index: 5;
}

.footer {
  background-color: #555;
  width: 100%;
  height: 50px;
  line-height: 50px;
  bottom: 0;
  position: fixed;
  font-size: 45px;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.footer i {
  color: #fff;
}
.footer .total {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0px;
  left: 46px;
  color: #fff;
  line-height: 20px;
  text-align: center;
  border-radius: 10px;
  background-color: #00a0dc;
  font-size: 10px;
}
.pay {
  /* background-color: rgb(78, 207, 45); */
  background-color: #00a0dc;
  color: #fff;
  font-size: 18px;
  padding: 0 20px;
}
.notPay {
  background-color: #bbb;
}

/* 运动小球 */
.pointPre {
  /* 动画的小球 */
  display: none;
}
.pointOuter {
  position: absolute;
  // z-index: 114;
  /* 当小球抛出时遵循贝塞尔曲线过渡 */
  -webkit-transition: all 1s cubic-bezier(0.39, -0.4, 0.83, 0.23) 0s;
  transition: all 1s cubic-bezier(0.39, -0.4, 0.83, 0.23) 0s;
}

.point-inner {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #00a0dc;
  /* 过渡属性名称 过渡时间 过渡曲线 延迟时间 */
  transition: all 1s ease 0s;
  -webkit-transition: all 1s ease 0s;
}
</style>
