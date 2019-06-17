<template>
    <div class="wrap">
        <h2>排序</h2>
        <ul v-for="(item,index) in list" :key="index">
            <h4>{{item.title}}</h4>
            <li>
                <p v-for="(x,y) in item.bind" :key="y">{{x}}</p>
            </li>
        </ul>
        <footer>
            <p>返回</p>
            <p>确认</p>
        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[{
                title:"按发起时间排序",
                bind:["按时间排序","按时间排序"]
            },{
                title:"按加班日期排序",
                bind:["按日期排序","按日期排序"]
            },{
                title:"按加班时间排序",
                bind:["按时数排序","按时数排序"]
            }]
        }
    },
    methods:{

    }
}
</script>
<style scoped lang="">
.wrap{
    width: 100%;
    height: 100%;
}
h2{
    width: 100%;
    text-align: center;
}
ul{
    width: 100%;
    margin-top: 50px;
    padding: 0 15px;
    box-sizing: border-box;
}
h4{
    color:#ccc;
}

li{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}
li p{
    width: 45%;
    background: #ccc;
    text-align: center;
    padding: 10px 0;
}
footer{
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    border-top: 1px solid #777;
}
footer p{
    line-height: 60px;
    text-align: center;
}
footer p:nth-child(1){
    color:green;
    width: 30%;
}
footer p:nth-child(2){
    background: green;
    color:#fff;
    width: 70%;
}
</style>