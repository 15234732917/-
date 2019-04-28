<template>
    <div>
       <div class="body">
        <p>数据统计</p >
        <div class="body-1">
            <div class="body1-1">
                当日数据：
            </div>
            <div class="body1-1 body1-2">
                <span>{{adduser}}</span><span>新增用户</span>
            </div>
            <div class="body1-1 body1-2">
                <span>{{addOrder}}</span><span>新增订单</span>
            </div>
            <div class="body1-1 body1-2">
                <span>{{addAdministrators}}</span><span>新增管理员</span>
            </div>
        </div>

        <div class="body-2">
            <div class="body2-1">
                总数据：
            </div>
            <div class="body2-1 body2-2">
                <span>{{register}}</span><span>注册用户</span>
            </div>
            <div class="body2-1 body2-2">
                <span>{{order}}</span><span>订单</span>
            </div>
            <div class="body2-1 body2-2">
                <span>{{Administrator}}</span><span>管理员</span>
            </div>
        </div>
        </div>
        <div id="myChart" :style="{width: '1000px', height: '450px'}"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            adduser:'',
            addOrder:'',
            addAdministrators:'',
            register:'',
            order:'',
            Administrator:'',
            nowTime:'',
            SxTime:'',
            FeTime:'',
            FrTime:'',
            TeTime:'',
            TwTime:'',
            OnTime:'',
            user1:'',
            user2:'',
            user3:'',
            user4:'',
            user5:'',
            user6:'',
            user7:'',
            order1:'',
            order2:'',
            order3:'',
            order4:'',
            order5:'',
            order6:'',
            order7:'',
            admin1:'',
            admin2:'',
            admin3:'',
            admin4:'',
            admin5:'',
            admin6:'',
            admin7:'',
        }
    },
    mounted(){
        this.nowTimes();

        //新增用户
        this.axios
        .get("https://elm.cangdu.org/statis/user/"+this.nowTime+"/count")
        .then(res => {
            this.adduser = res.data.count;
        });
        //新增订单
        this.axios
        .get("https://elm.cangdu.org/statis/order/"+this.nowTime+"/count")
        .then(res => {
            this.addOrder = res.data.count;
        });
        //新增管理员
        this.axios
        .get("https://elm.cangdu.org/statis/admin/"+this.nowTime+"/count")
        .then(res => {
            this.addAdministrators = res.data.count;
        });
        //注册用户
        this.axios.get("https://elm.cangdu.org/v1/users/count")
        .then(res => {
            this.register = res.data.count;
        });
        //订单
        this.axios.get("https://elm.cangdu.org/bos/orders/count")
        .then(res => {
            this.order = res.data.count;
        });
        this.axios.get("https://elm.cangdu.org/admin/count")
        .then((res)=>{
             this.Administrator=res.data.count
        })

        
        //前六天
         //新增用户
        this.axios
        .get("https://elm.cangdu.org/statis/user/"+this.SxTime+"/count")
        .then(res => {
            this.user1= res.data.count;
        });
        //新增订单
        this.axios.get("https://elm.cangdu.org/statis/order/"+this.SxTime+"/count")
        .then(res => {
            this.order1= res.data.count;
        });
        //新增管理员
        this.axios
        .get("https://elm.cangdu.org/statis/admin/"+this.SxTime+"/count")
        .then(res => {
            this.admin1 = res.data.count;
        });
        //前五天
         //新增用户
        this.axios
        .get("https://elm.cangdu.org/statis/user/"+this.FeTime+"/count")
        .then(res => {
            this.user2 = res.data.count;
        });
        //新增订单
        this.axios.get("https://elm.cangdu.org/statis/order/"+this.FeTime+"/count")
        .then(res => {
            this.order2 = res.data.count;
        });
        //新增管理员
        this.axios
        .get("https://elm.cangdu.org/statis/admin/"+this.FeTime+"/count")
        .then(res => {
            this.admin2 = res.data.count;
        });
         //前四天
         //新增用户
        this.axios
        .get("https://elm.cangdu.org/statis/user/"+this.FrTime+"/count")
        .then(res => {
            this.user3 = res.data.count;
        });
        //新增订单
        this.axios.get("https://elm.cangdu.org/statis/order/"+this.FrTime+"/count")
        .then(res => {
            this.order3 = res.data.count;
        });
        //新增管理员
        this.axios
        .get("https://elm.cangdu.org/statis/admin/"+this.FrTime+"/count")
        .then(res => {
            this.admin3 = res.data.count;
        });
         //前三天
         //新增用户
        this.axios
        .get("https://elm.cangdu.org/statis/user/"+this.TeTime+"/count")
        .then(res => {
            this.user4 = res.data.count;
        });
        //新增订单
        this.axios.get("https://elm.cangdu.org/statis/order/"+this.TeTime+"/count")
        .then(res => {
            this.order4 = res.data.count;
        });
        //新增管理员
        this.axios
        .get("https://elm.cangdu.org/statis/admin/"+this.TeTime+"/count")
        .then(res => {
            this.admin4 = res.data.count;
        });
         //前二天
         //新增用户
        this.axios
        .get("https://elm.cangdu.org/statis/user/"+this.TwTime+"/count")
        .then(res => {
            this.user5 = res.data.count;
        });
        //新增订单
        this.axios.get("https://elm.cangdu.org/statis/order/"+this.TwTime+"/count")
        .then(res => {
            this.order5 = res.data.count;
        });
        //新增管理员
        this.axios
        .get("https://elm.cangdu.org/statis/admin/"+this.TwTime+"/count")
        .then(res => {
            this.admin5 = res.data.count;
        });
         //前一天
         //新增用户
        this.axios
        .get("https://elm.cangdu.org/statis/user/"+this.OnTime+"/count")
        .then(res => {
            this.user6 = res.data.count;
        });
        //新增订单
        this.axios.get("https://elm.cangdu.org/statis/order/"+this.OnTime+"/count")
        .then(res => {
            this.order6 = res.data.count;
        });
        //新增管理员
        this.axios
        .get("https://elm.cangdu.org/statis/admin/"+this.OnTime+"/count")
        .then(res => {
            this.admin6 = res.data.count;
        });
         //现在
         //新增用户
        this.axios
        .get("https://elm.cangdu.org/statis/user/"+this.nowTime+"/count")
        .then(res => {
            console.log(res.data);
            this.user7 = res.data.count;
        });
        //新增订单
        this.axios.get("https://elm.cangdu.org/statis/order/"+this.nowTime+"/count")
        .then(res => {
            this.order7 = res.data.count;
        });
        //新增管理员
        this.axios
        .get("https://elm.cangdu.org/statis/admin/"+this.nowTime+"/count")
        .then(res => {
            this.admin7 = res.data.count;
            if(this.admin7!=""){
                this.drawLine();
            }
        });

        
    },
    
    methods:{

        timeFormate(timeStamp) {
            let year = new Date(timeStamp).getFullYear();
            let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
            let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
            let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
            let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
            this.nowTime = year + "-" + month + "-" + date ;
            this.SxTime= year + "-" + month + "-" + (date-6)
            this.FeTime= year + "-" + month + "-" + (date-5)
            this.FrTime= year + "-" + month + "-" + (date-4)
            this.TeTime= year + "-" + month + "-" + (date-3)
            this.TwTime= year + "-" + month + "-" + (date-2)
            this.OnTime=year + "-" + month + "-" + (date-1)
            // console.log(this.SeTime,this.SxTime)
        },
        nowTimes(){
            this.timeFormate(new Date());
        },

      drawLine(){
        // 基于准备好的dom，初始化echarts实例
    let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({


          title: {
            text: '走势图'
          },


          tooltip: {
            trigger: 'axis'
          },



          legend: {
            data:['新注册用户','新增订单',"新增管理员"]
          },


          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: [this.SxTime,this.FeTime,this.FrTime,this.TeTime,this.TwTime,this.OnTime,this.nowTime]
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value}'
            }
          },
          series: [
            {
              name:'新注册用户',
              type:'line',
              data:[this.user1,this.user2,this.user3,this.user4,this.user5,this.user6,this.user7],
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
            },
            {
              name:'新增订单',
              type:'line',
              data:[this.order1,this.order2,this.order3,this.order4,this.order5,this.order6,this.order7],
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
            },{
          name:'新增管理员',
            type:'line',
            data:[this.admin1,this.admin2,this.admin3,this.admin4,this.admin5,this.admin6,this.admin7],
            markPoint: {
            data: [
              {type: 'max', name: '最大值'},
              {type: 'min', name: '最小值'}
            ]
          },
        }


          ]
        });
      }
    }

 }

</script>

<style lang='scss' scoped>
.body{
      width: 100%;
      p:nth-of-type(1){
        text-align: center;
        // margin-top: 20px;
        font-size: 30px;
      }
      .body-1{
        width: 100%;
        font-size: 30px;
        padding-top: 20px;
        line-height: 30px;
        .body1-1{
          margin-left: 10px;
          display: inline-block;
          width: 250px;
          height: 35px;
          line-height: 35px;
          background-color: #ff9800;
          color: white;
          text-align: center;
          border-radius: 5px;
          font-size: 19px;
          span:nth-of-type(2){
            font-size: 16px;
          }
        }
        .body1-2{
          background-color: #e5e9f2;
          color: black;
        }
      }
      .body-2{
        width: 100%;
        font-size: 30px;
        padding-top: 20px;
        line-height: 30px;
        .body2-1{
         margin-left: 10px;
          display: inline-block;
          width: 250px;
          height: 35px;
          line-height: 35px;
          background-color: #20a0ff;
          color: white;
          text-align: center;
          border-radius: 5px;
          font-size: 19px;
          span:nth-of-type(2){
            font-size: 16px;
          }
        }
        .body2-2{
          background-color: #e5e9f2;
          color: black;
        }
      }
    }
    #myChart{
      margin-top: 70px;
      padding-left: 50px;
    }
    
</style>
