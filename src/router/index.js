import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
// import HelloWorld from '@/components/HelloWorld'
// import Demoone from '@/page/project/Demoone'
// import Demotwo from '@/page/project/Demotwo'
// import Demothree from '@/page/project/Demothree'
// import Demofour from '@/page/project/Demofour'
// import Demofive from '@/page/project/Demofive'
// import Demosix from '@/page/project/Demosix'
// import home from '@/page/home/home'
// import city from '@/page/city/city'

const home = resolve => require(['../page/home/home.vue'], resolve)
const city = resolve => require(['../page/city/city.vue'], resolve)
const msite = resolve => require(['../page/project/msite.vue'], resolve)
const search = resolve => require(['../page/project/search.vue'], resolve)
const Demothree = resolve => require(['../page/project/Demothree.vue'], resolve)
const shop = resolve => require(['../page/project/shop.vue'], resolve)
const food = resolve => require(['../page/project/food.vue'], resolve)
const order = resolve => require(['../page/project/order.vue'], resolve)
const profile = resolve => require(['../page/project/profile.vue'], resolve)
const aaa = resolve => require(['../page/project/aaa.vue'], resolve)
const manage = resolve => require(['../page/elephp/manage.vue'], resolve)
const menu = resolve => require(['../page/elephp/menu.vue'], resolve)
const main = resolve => require(['../page/elephp/main.vue'], resolve)
const userlist = resolve => require(['../page/elephp/main/userList.vue'], resolve)
const shoplist = resolve => require(['../page/elephp/main/shopList.vue'], resolve)
const foodlist = resolve => require(['../page/elephp/main/foodList.vue'], resolve)
const orderlist = resolve => require(['../page/elephp/main/orderList.vue'], resolve)
const adminlist = resolve => require(['../page/elephp/main/adminList.vue'], resolve)
const addshop = resolve => require(['../page/elephp/main/addShop.vue'], resolve)
const addgood = resolve => require(['../page/elephp/main/addGoods.vue'], resolve)
const visitor = resolve => require(['../page/elephp/main/visitor.vue'], resolve)
const vueedit = resolve => require(['../page/elephp/main/vueEdit.vue'], resolve)
const adminset = resolve => require(['../page/elephp/main/adminSet.vue'], resolve)
const explain = resolve => require(['../page/elephp/main/explain.vue'], resolve)


Vue.use(Router)

let router = new Router({
  routes: [{
      path: '/',
      name: 'app',
      component: App,
      redirect: '/home',
      children: [{
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/city/:cityid',
          name: 'city',
          component: city
        },
        {
          path: '/msite/:geohash',
          name: 'msite',
          component: msite
        },
        {
          path: '/search',
          name: 'search',
          component: search
        },
        {
          path: '/demothree',
          name: 'demothree',
          component: Demothree
        },
        {
          path: '/shop/:geohash/:id',
          name: 'shop',
          component: shop
        },
        {
          path: '/food/:title',
          name: 'food',
          component: food,
        },
        {
          path: '/order',
          name: 'order',
          component: order,
        },
        {
          path: '/profile',
          name: 'profile',
          component: profile,
        },
        {
          path: '/aaa',
          name: 'aaa',
          component: aaa,
        }, 
        {
          path: '/manage',
          name: 'manage',
          component: manage,
        },
        {
          path: '/menu',
          name: 'menu',
          component: menu,
          redirect:'/main',
          children:[
            {
              path: '/main',
              name: 'main',
              component: main,
            },
            {
              path: '/userlist',
              name: 'userlist',
              component: userlist,
            },
            {
              path: '/shoplist',
              name: 'shoplist',
              component: shoplist,
            },
            {
              path: '/foodlist',
              name: 'foodlist',
              component: foodlist,
            },
            {
              path: '/orderlist',
              name: 'orderlist',
              component: orderlist,
            },
            {
              path: '/adminlist',
              name: 'adminlist',
              component: adminlist,
            },
            {
              path: '/addshop',
              name: 'addshop',
              component: addshop,
            },
            {
              path: '/addgood',
              name: 'addgood',
              component: addgood,
            },
            {
              path: '/visitor',
              name: 'visitor',
              component: visitor,
            },
            {
              path: '/vueedit',
              name: 'vueedit',
              component: vueedit,
            },
            {
              path: '/adminset',
              name: 'adminset',
              component: adminset,
            },
            {
              path: '/explain',
              name: 'explain',
              component: explain,
            },
          ]
        },
      ]
    },


  ]
})

router.beforeEach((to, from, next) => { //路由进入前
  // console.log(to); // to 当前要去的路由  from 从哪里来
  if (to.path != from.path) {
    next(); //不调用next的时候  我就不跳转
  }
})

export default router;
