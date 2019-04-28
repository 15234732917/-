<template>
    <div>
        <el-table
            :data="adminList"
            highlight-current-row
            style="width: 1500px">
            <el-table-column
            property="user_name"
            label="姓名"
            width="200">
            </el-table-column>
            <el-table-column
            property="create_time"
            label="注册日期"
            width="250">
            </el-table-column>
            <el-table-column
            property="city"
            label="地址"
            width="250">
            </el-table-column>
            <el-table-column
            property="admin"
            label="权限">
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
            adminList:[],
            count:0,
            currentPage:1,
        }
    },
    mounted(){
        this.axios
        .get("https://elm.cangdu.org/admin/all?offset=0&limit=20")
        .then((res)=>{
            this.adminList=res.data.data
        })
        this.axios
        .get('https://elm.cangdu.org/admin/count')
        .then(res=>{
            this.count=res.data.count
        })
    },
    methods: {
        handleSizeChange(val) {
            this.axios
            .get('https://elm.cangdu.org/admin/all?offset='+(val-1)*20+'&limit=20')
            .then(res=>{
                this.adminList=res.data.data
            }) 
        },
        handleCurrentChange(val) {
            this.axios
            .get('https://elm.cangdu.org/admin/all?offset='+(val-1)*20+'&limit=20')
            .then(res=>{
                this.adminList=res.data.data
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
