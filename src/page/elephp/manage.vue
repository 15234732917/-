<template>
    <div class="box">
        <div class="content animated fadeInDown">
            <h1>elm后台管理系统</h1>
            <section>
                <p><el-input  placeholder="请输入用户名" v-model="username"></el-input></p>
                <p><el-input  placeholder="请输入密码" v-model="psw" show-password></el-input></p>
                <p><el-button type="primary" @click="submit">登陆</el-button></p>
                <p>温馨提示:</p>
                <p>未登录过的新用户，自动注册</p>
                <p>注册过的用户可凭账号密码登录</p>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username:'',
            psw:''
        }
    },
    methods:{
        submit(){
            let obj={
                user_name: this.username,
                password: this.psw
            }
            this.axios.post("https://elm.cangdu.org/admin/login",obj)
            .then((res)=>{
                if(res){
                    if(res.data.status==1) {
                        this.$router.push({name:'menu'});
                    }
                    if(res.data.status==0){
                        console.log(res.data.message);
                    }
                }
            })
        }
    }
}
</script>

<style lang="scss" secoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.box{
    width: 100%;
    height: 100%;
    text-align: center;
    background: #324057;
}
.content{
    width: 100%;
    height: 100%;
    text-align: center;
     h1{
        margin-top: 250px;
        font-size: 30px;
        color: white;
        text-align: center;
    }
    section{
        background: white;
        width: 360px;
        height: 250px;
        margin: 50px auto;
        border-radius: 10px;
        p{
            padding: 0 20px;
            font-size: 12px;
            color: red;
        }
        p:nth-of-type(1){
            padding: 20px 20px 0 20px;
        }
        p:nth-of-type(2){
            margin-top: 20px;
        }
        p:nth-of-type(3){
            margin-top: 20px;
            button{
                width: 320px;
            }
        }
        p:nth-of-type(4){
            margin-top: 10px;
        }
        
    }
}
</style>
