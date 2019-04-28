<template>
    <div class="box">
       <!-- <header>
            <p><</p>
            <router-link tag="p" to="/demotwo"><</router-link>
            <p>搜索</p>
            <p></p>
       </header> -->
       <head-top :goback="true"  :signinUp="false">
            <p slot="search" class="head_logo">搜索</p>
            <p slot="sear"></p>
       </head-top>
       <div class="content">
            <div class="con">
                <p><input type="text" placeholder="牛肉"><button>提交</button></p>
            </div>
            <div class="coe">
                <p>商家</p>
            </div>
            <div class="cot">
                <dl>
                    <!-- <dt><img src="../../static/src/16.png"></dt> -->
                    <router-link tag="dt" to="/demosix"><img src="../../images/src/16.png"></router-link>
                    <dd>
                        <p><span>我的牛肉面</span><span>支付</span></p>
                        <p>月售 601 单</p>
                        <p>5 元起送/距离2159.2公里</p>
                    </dd>
                </dl>
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
        }
    }
}
.content{
    width: 100%;
    flex: 1;
    overflow: auto;
    background: #f5f5f5;
    .con{
        padding: 0.4rem;
        background: white;
        p{
            width: 100%;
            display: flex;
            input{
                width: 70%;
                height: 1.8rem;
                border-radius: 0.3rem;
                border: 1px solid #eeeeee;
                padding-left: 0.5rem;
                outline: none;
                background: #f2f2f2;
            }
            button{
                width: 25%;
                height: 1.8rem;
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
            font-size: 0.7rem;
            padding-left: 0.5rem;
            font-weight: bold;
        }
    }
    .cot{
        width: 100%;
        background: white;
        dl{
            width: 100%;
            display: flex;
            padding: 0.3rem;
            dt{
               width: 20%;
               img{
                   width: 3.5rem;
                   height: 3.5rem;;
               }
            }
            dd{
               width: 80%;
               p:nth-of-type(1){
                   display: flex;
                   padding-top: 0.5rem;
                   span:nth-of-type(1){
                       font-size: 0.6rem;
                   }
                   span:nth-of-type(2){
                       display: block;
                       font-size: 0.6rem;
                       border: 1px solid red;
                       color: red;
                       margin-left: 0.5rem; 
                   }
               }
                p:nth-of-type(2){
                    font-size: 0.8rem;
                    padding-top: 0.2rem;
                }
                p:nth-of-type(3){
                    font-size: 0.8rem;
                    padding-top: 0.2rem;
                    padding-bottom: 0.3rem;
                    border-bottom: 1px solid #cccccc;
                }
            }
        }
    }
}
footer{
    width: 100%;
    height: 3rem;

    ul{
        padding-top:0.3rem; 
        width: 100%;
        height: 100%;
        border-top: 1px solid #e4e4e4;
        list-style: none;
        display: flex;
        li{
            flex: 1;
            text-align: center;
            img{
                width: 1rem;
                height: 1rem;
            }
            span{
                display: block;
                font-size: 0.5rem;
                color: #7b7b7b;
            }
        }
    }
}
</style>
