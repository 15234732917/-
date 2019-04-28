<template>
    <div class="menu">
        <el-container>
            <el-aside width="320px"><Aside></Aside></el-aside>
            <el-container>
                <el-header><Header></Header></el-header>
                <el-main><router-view></router-view></el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Aside from './aside'
import Header from './header'
export default {
    components:{
        Aside,
        Header,
    },
    data() {
        return{
            
        }
    },
}
</script>

<style lang="scss" scoped>
.menu{
    width: 100%;
    height: 100%;
    box-sizing: border-box; 
    display: flex; 
}
  .el-header {
    background-color: #eff2f7;
    color: #333;
    line-height: 60px;
    font-size: 14px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    line-height: 200px;
  }
  
  .el-main {
    background-color: white;;
    color: #333;
  }
  
  

</style>
