<template>
    <div class="box">
       <!-- <header>
            <p><</p>
            <router-link tag="p" to="/msite?geohash=:geohash"><</router-link>
            <p>搜索</p>
            <p></p>
       </header> -->
       <head-top :goback="true"  :signinUp="false">
            <p slot="search" class="head_logo">搜索</p>
            <p slot="sear"></p>
       </head-top>
       <div class="content">
            <div class="con">
                <p><input type="text" placeholder="请输入商家或美食名称"><button>提交</button></p>
            </div>
             <div class="coe">
                <p>搜索效果</p>
            </div>
            <div class="cot">
                <p><span>效果</span><span>&times;</span></p>
                <p><span>饭</span><span>&times;</span></p>
                <!-- <p><span>牛肉</span><span>&times;</span></p> -->
                <router-link tag="p" to="/demothree"><span>牛肉</span><span>&times;</span></router-link>
                <p>清空搜索历史</p>
            </div>
       </div>
      <foo-ter></foo-ter>
    </div>
</template>

<script>
import FooTer from '../../components/footer/footer'
import HeadTop from '../../components/header/head'
export default {
    components:{
       HeadTop,
       FooTer
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
.content{
    width: 100%;
    background: #f5f5f5;
    flex: 1;
    overflow: auto;
     .con{
        padding: 0.4rem;
        background: white;
        p{
            width: 100%;
            input{
                width: 70%;
                height: 2rem;
                border-radius: 0.3rem;
                border: 1px solid #eeeeee;
                padding-left: 0.5rem;
                outline: none;
                background: #f2f2f2;
                font-size: 0.5rem;
            }
            button{
                width: 25%;
                height: 2rem;
                background: #3792e5;
                color: white;
                border-radius: 0.3rem;
                border: none;
                outline: none;
                font-size: 0.8rem;
                font-weight: bold;
                margin-left: 0.5rem;
            }
        }
    }
    .coe{
        width: 100%;
        background: #f5f5f5;
        height: 1.5rem;
        p{
            line-height: 1.5rem;
            font-size: 0.6rem;
            padding-left: 0.5rem;
            font-weight: bold;
            color: #666666;
        }
    }
    .cot{
        width: 100%;
        background: white;
        p:nth-of-type(1){
            width: 100%;
            padding: 0.4rem 0.4rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #cccccc;
            span:nth-of-type(1){
                font-size: 0.6rem;
                color: #424242;
            }
            span:nth-of-type(2){
                font-size: 0.8rem;
                font-weight: bold;
                color: #999999;
            }
        }
         p:nth-of-type(2){
            width: 100%;
            padding: 0.4rem 0.4rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #cccccc;
            span:nth-of-type(1){
                font-size: 0.6rem;
                color: #424242;
            }
            span:nth-of-type(2){
                font-size: 0.8rem;
                font-weight: bold;
                color: #999999;
            }
        }
         p:nth-of-type(3){
            width: 100%;
            padding: 0.4rem 0.4rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #cccccc;
            span:nth-of-type(1){
                font-size: 0.6rem;
                color: #424242;
            }
            span:nth-of-type(2){
                font-size: 0.8rem;
                font-weight: bold;
                color: #999999;
            }
        }
        p:nth-of-type(4){
            width: 100%;
            padding: 0.5rem 0.2rem;
            font-size: 0.8rem;
            font-weight: bold;
            color: #3792e5;
            text-align: center;
        }
    }
}
}

</style>
