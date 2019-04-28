<template>
    <div>
        <el-table
            :data="list"
            highlight-current-row
            style="width: 1500px">
            <el-table-column
            type="index"
            width="120">
            </el-table-column>
            <el-table-column
            property="registe_time"
            label="注册日期"
            width="250">
            </el-table-column>
            <el-table-column
            property="username"
            label="用户姓名"
            width="250">
            </el-table-column>
            <el-table-column
            property="city"
            label="注册地址">
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
            list:[],
            count:0,
            currentPage:1,
        }
    },
    mounted(){
        this.axios
        .get("https://elm.cangdu.org/v1/users/list?offset=0&limit=20")
        .then((res)=>{
            this.list=res.data
        })
        this.axios
        .get('https://elm.cangdu.org/v1/users/count')
        .then(res=>{
            this.count=res.data.count
        })
    },
    methods: {
        handleSizeChange(val) {
            this.axios
            .get('https://elm.cangdu.org/v1/users/list?offset='+(val-1)*20+'&limit=20')
            .then(res=>{
                this.list=res.data
            }) 
        },
        handleCurrentChange(val) {
            this.axios
            .get('https://elm.cangdu.org/v1/users/list?offset='+(val-1)*20+'&limit=20')
            .then(res=>{
                this.list=res.data
            }) 
        },
    }
}
</script>
<style lang="scss" scoped>
.el-table{
    margin-left: 20px;
    border: 1px solid #ddd;
}

.page{
    margin-top: 10px;
    margin-left: 10px; 
}
</style>
