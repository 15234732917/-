<template>
  <header id="head">
    <!-- logo部分 -->
    <slot name="logo"></slot>
    
    <!-- 返回上一级 -->
    <section v-if="goback" class="head_back" @click='$router.go(-1)'>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <polyline points="12,18 4,9 12,0" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 2;"></polyline>
      </svg>
    </section>
    
    <router-link tag="section" to="/search" v-if="gob" class="head_gob"> 
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <circle cx="8" cy="8" r="7" stroke="rgb(255,255,255)" stroke-width="1" fill="none"></circle> 
            <line x1="14" y1="14" x2="20" y2="20" style="stroke: rgb(255, 255, 255); stroke-width: 2;"></line>
        </svg>
    </router-link>
    <slot name="search"></slot>
    <slot name="sear"></slot>
     <!-- 标题 -->
    <section class="title_head ellipsis" v-if='headTitle'>
        <span class="title_text">{{headTitle}}</span>
    </section>
    
    <!-- 用户登录显示 -->
    <router-link :to="false? '/profile':'/login'" v-if="signinUp" class="head_login">
        <img v-if="false" src="https://sb2b.shazimeiyoufaxian.com/70kgDvnSh_QwerGkhhy/it/use">
       <span class="login_span" v-else>登录|注册</span>
    </router-link>
    
   
    
    <slot name="changecity" class="title"></slot>
  </header> 

</template>

<script>
export default {
    props:['headTitle','goback','signinUp','gob'],
    data(){
        return{
           false:false,
        }
    }
};
</script>

<style lang="scss" scoped>
#head{
    width: 100%;
    height: 2.3rem;
    background: #3792e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.6rem;
}
.head_login{
    text-decoration: none;
    .login_span{
        font-size: 0.5rem;
        color: white;
    }
}
.title_head{
    .title_text{
        font-size: 0.7rem;
        font-weight: bold;
        color: white;
    }
}
.head_back{
    width: 1.5rem;
    height: 1rem;
}
.head_gob{
    width: 1.3rem;
    height: 1rem;
}
</style>
