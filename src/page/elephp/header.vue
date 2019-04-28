<template>
    <div class="header_container">
        <div>
            首页
        </div>
        <el-row class="block-col-2">
            <el-col :span="12">
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        <img src="//elm.cangdu.org/img/default.jpg" >
                    </span>
                <el-dropdown-menu>
                    <el-dropdown-item>首页</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.header_container{
    width: 100%;
    display:flex;
    justify-content:space-between;
    .block-col-2{
        padding-top:10px;
        img{
            width:40px;
            height: 40px;
            border-radius:100%;
            outline: none;
            }
    }
}
</style>
