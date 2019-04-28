<template>
    <div class="box">
        <head-top :goback="true"    :signinUp="false">
            <p slot="search" class="head_logo">{{this.$route.params.title}}</p>
            <p slot="sear"></p>
       </head-top>
       <div class="con">
           <ul>
               <li>{{this.$route.params.title}}</li>
               <li>排序</li>
               <li>筛选</li>
           </ul>
       </div>
       <div class="content">
           <zhi-hu></zhi-hu>
       </div>
    </div>
</template>

<script>
import HeadTop from '../../components/header/head'
import ZhiHu from './zhihu'
export default {
    components:{
        HeadTop,
        ZhiHu
        },
    }
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    header{
        p{
            font-size: 0.8rem;
            color: white;
            font-weight: bold;
            padding-right: 1rem;
        }
    }
}
.con{
    width: 100%;
    border-bottom: 1px solid #cccccc;
    ul{
        width: 100%;
        list-style: none;
        display: flex;
        height: 1.5rem;
        li{
            flex: 1;
            border-left: 1px solid #cccccc;
            line-height: 1.5rem;
            text-align: center;
            font-size: 0.5rem;
        }
        li:nth-of-type(1){
            border-left: none;
        }
    }
}
.content{
    width: 100%;
    float: 1;
    overflow: auto;
}
</style>
