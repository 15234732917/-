// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './config/rem'
import FastClick from 'fastclick'
import router from './router/index.js'
import store from './store/index.js'

import animated from 'animate.css'
Vue.use(animated)

import echarts from 'echarts'
Vue.prototype.$echarts=echarts

if('addEventListener' in document){
  document.addEventListener('DOMContentLoaded',function(){
    FastClick.attach(document.body);
  },false)
}

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import axios from "axios";
Vue.prototype.axios=axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
}).$mount('#app')