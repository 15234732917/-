<template>
    <div class="orderlist">
        <el-table :data="orderList" style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="用户名">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="店铺名称">
                            <span>{{ props.row.restaurant_name }}</span>
                        </el-form-item>
                        <el-form-item label="收货地址">
                            <span>{{ props.row.item_id }}</span>
                        </el-form-item>
                        <el-form-item label="店铺 ID">
                            <span>{{ props.row.restaurant_id }}</span>
                        </el-form-item>
                        <el-form-item label="店铺地址">
                            <span>{{ props.row.phone }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column label="订单 ID" prop="id"></el-table-column>
            <el-table-column label="总价格" prop="total_amount"></el-table-column>                     
            <el-table-column label="订单状态" prop="status_bar.title"></el-table-column>                     
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
            orderList: [],
            currentPage: 1,
            count:0,
        }
    },
    mounted(){
        this.axios.get("https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined")
        .then((res)=>{
            console.log(res.data)
            this.orderList=res.data
        })
        this.axios
        .get("https://elm.cangdu.org/bos/orders/count?restaurant_id=undefined")
        .then((res)=>{
            this.count=res.data.count
        })
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        handleSizeChange(val) {
            this.axios
            .get('https://elm.cangdu.org/bos/orders?offset='+(val-1)*20+'&limit=20&restaurant_id=undefined')
            .then(res=>{
                this.orderList=res.data
            })
        },
        handleCurrentChange(val) {
           this.axios
            .get('https://elm.cangdu.org/bos/orders?offset='+(val-1)*20+'&limit=20&restaurant_id=undefined')
            .then(res=>{
                this.orderList=res.data
            })
        },
    }
}
</script>

<style lang='scss' scoped>
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

