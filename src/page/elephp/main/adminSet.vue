<template>
    <div class="adminset">
        <header>管理员信息</header>
        <div class="adminlist">
            <ul>
                <li>
                    <span>姓名:</span>
                    <span></span>
                </li>
                <li>
                    <span>注册时间:</span>
                    <span></span>
                </li>
                <li>
                    <span>管理员权限:</span>
                    <span></span>
                </li>
                <li>
                    <span>管理员 ID:</span>
                    <span></span>
                </li>
                <li>
                    <span>更换头像:</span>
                    <div class="avatar_uploader">
                        <div class="el_upload el_upload_text">
                            <img src="//elm.cangdu.org/img/default.jpg" class="avatar">
                            <input type="file" name="file" class="el_upload_input">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            admin:[]
        }
    },
    mounted(){
        this.axios
        .get('https://elm.cangdu.org/admin/info')
        .then((res)=>{
            console.log(res)
             this.admin=res.data
        })
    }
}
</script>

<style lang='scss' scoped>
.adminset{
    width: 100%;
    height: 100%;
    font-size: 16px;
    header{
        font-size: 20px;
        text-align: center;
    }
    .adminlist{
        width: 60%;
        background-color: #f9fafc;
        min-height: 500px;
        margin: 20px auto 0;
        border-radius: 10px;
        ul{
            width: 100%;
            list-style: none;
            li{
                padding: 20px;
                span{
                    color: #666
                }
                .avatar_uploader {
                    width: 120px;
                    height: 120px;
                    border: 1px dashed #d9d9d9;
                    margin-top: 10px;
                    border-radius: 6px;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    .el_upload {
                         border: 1px dashed #d9d9d9;
                        border-radius: 6px;
                        cursor: pointer;
                        position: relative;
                        overflow: hidden;
                        display: inline-block;
                        text-align: center;
                        .avatar{
                            width: 120px;
                            height: 120px;
                            display: block;
                        }
                        .el_upload_input{
                            display: none;
                            &:hover{
                                border: 1px dashed #d9d9d9;
                            }
                        }
                    }
                    
                }
            }
        }
    }
}
</style>
