<template>
    <div class="shoplist">
        <el-table :data="shopList" style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="商品名称">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="店铺地址">
                            <span>{{ props.row.address }}</span>
                        </el-form-item>
                        <el-form-item label="店铺介绍">
                            <span>{{ props.row.description }}</span>
                        </el-form-item>
                        <el-form-item label="店铺 ID">
                            <span>{{ props.row.id }}</span>
                        </el-form-item>
                        <el-form-item label="联系电话">
                            <span>{{ props.row.phone }}</span>
                        </el-form-item>
                        <el-form-item label="评分">
                            <span>{{ props.row.rating }}</span>
                        </el-form-item>
                        <el-form-item label="销售量">
                            <span>{{ props.row.recent_order_num }}</span>
                        </el-form-item>
                        <el-form-item label="分类">
                            <span>{{ props.row.category }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column label="店铺名称" prop="name" width=''></el-table-column>
            <el-table-column label="店铺地址" prop="address"></el-table-column>                     
            <el-table-column label="店铺介绍" prop="description"></el-table-column>                     
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>  
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">添加食品</el-button>            
                    <el-button size="mini" type="danger" :plain="true" @click="handleDelete(scope.$index, scope.row)">删除</el-button>           
                </template>
            </el-table-column>
        </el-table>
        <div class="page">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="20"
            background
            layout="total, prev, pager, next"
            :total=count>
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shopList: [],
            currentPage: 1,
            count:0,
        }
    },
    mounted(){
        this.axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=0&limit=20")
        .then((res)=>{
            console.log(res.data)
            this.shopList=res.data
        })
        this.axios
        .get('https://elm.cangdu.org/shopping/restaurants/count')
        .then(res=>{
            this.count=res.data.count
        })
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            
        },
        handleSizeChange(val) {
            this.axios
            .get('https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset='+(val-1)*20+'&limit=20')
            .then(res=>{
                this.shopList=res.data
            })
        },
        handleCurrentChange(val) {
           this.axios
            .get('https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset='+(val-1)*20+'&limit=20')
            .then(res=>{
                this.shopList=res.data
            })
        },
    }
}
</script>


<style lang="scss" scoped>
.el-table{
    width:95%;
    border:1px solid #DFE6EC;
    text-align: center;
}
.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}
.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
.page{
    margin-top: 10px;
    margin-left: 10px; 
}
</style>
