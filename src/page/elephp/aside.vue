<template>
    <div class="aside">
         <el-col :span="12">
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="rgb(50, 64, 87)"
                text-color="#fff"
                active-text-color="#20A0ff">
                    <el-menu-item index="1"  @click="menu">
                        <i class="el-icon-menu"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>

                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-document"></i>
                        <span>数据管理</span>
                        </template>
                        <el-menu-item-group>
                        <el-menu-item index="1-1" @click="userlist">用户列表</el-menu-item>
                        <el-menu-item index="1-2" @click="shoplist">商家列表</el-menu-item>
                        <el-menu-item index="1-3" @click="foodlist">食品列表</el-menu-item>
                        <el-menu-item index="1-4" @click="orderlist">订单列表</el-menu-item>
                        <el-menu-item index="1-5" @click="adminlist">管理员列表</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="2">
                        <template slot="title">
                        <i class="el-icon-plus"></i>
                        <span>添加数据</span>
                        </template>
                        <el-menu-item-group>
                        <el-menu-item index="1-1" @click="addshop">添加商铺</el-menu-item>
                        <el-menu-item index="1-2" @click="addgood">添加商品</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="3">
                        <template slot="title">
                        <i class="el-icon-star-on"></i>
                        <span>图表</span>
                        </template>
                        <el-menu-item-group>
                        <el-menu-item index="1-1" @click="visitor">用户分布</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="4">
                        <template slot="title">
                        <i class="el-icon-edit"></i>
                        <span>编辑</span>
                        </template>
                        <el-menu-item-group>
                        <el-menu-item index="1-1" @click="vueedit">文本编辑</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="5">
                        <template slot="title">
                        <i class="el-icon-s-tools"></i>
                        <span>设置</span>
                        </template>
                        <el-menu-item-group>
                        <el-menu-item index="1-1" @click="adminset">管理员设置</el-menu-item>
                            
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="6">
                        <template slot="title">
                        <i class="el-icon-warning"></i>
                        <span>说明</span>
                        </template>
                        <el-menu-item-group>
                        <el-menu-item index="1-1" @click="explain">说明</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                </el-menu>
            </el-col>
    </div>
</template>

<script>
export default {
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      menu(){
          this.$router.push({name:'main'})
      },
      userlist(){
          this.$router.push({name:'userlist'})
      },
      shoplist(){
          this.$router.push({name:'shoplist'})
      },
      foodlist(){
           this.$router.push({name:'foodlist'})
      },
      orderlist(){
            this.$router.push({name:'orderlist'})
      },
      adminlist(){
            this.$router.push({name:'adminlist'})
      },
      addshop(){
            this.$router.push({name:'addshop'})
      },
      addgood(){
            this.$router.push({name:'addgood'})
      },
      visitor(){
            this.$router.push({name:'visitor'})
      },
      vueedit(){
            this.$router.push({name:'vueedit'})
      },
      adminset(){
            this.$router.push({name:'adminset'})
      },
      explain(){
             this.$router.push({name:'explain'})
      }
    }
}
</script>

<style lang="scss" scoped>
.aside{
    width: 100%;
    height: 100%;
    background-color:rgb(50, 64, 87);
    div{
        width: 100%;
        
    }   
    
}
</style>
