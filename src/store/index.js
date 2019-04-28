import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

// import VuePersist from 'vuex-persist'
// const vuexLocal =new VuePersist({
//     storage:window.localStorage
// })

export default new vuex.Store({
    // plugins:[vuexLocal.plugin], 
    state:{   //存储变量
    //    goods:[]
    },
    //  mutations  声明改变数据的方法。
    mutations:{
        // add(state,item){
        //     state.goods.push(item)
        // }
    },
    getters:{ //相当于  state里面数据的  计算属性 
        
    },
    // plugins:[vuexLocal.plugin], // 安装插件
    modules:{   //是用来引入一个新的store文件
    },
    actions:{
    }
})