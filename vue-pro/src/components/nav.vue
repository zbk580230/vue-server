<template>
    <header>
        <dl v-for="(item) in list" :key="item.index" @click="handliclick(item.index)">
            <dt><img :src="item.img" alt=""></dt>
            <dd>{{item.title}}</dd>
        </dl>
    </header>
</template>
<script>
export default {
    data(){
        return{
            list:[{
                title:"待处理",
                img:"../static/icon/shijian.svg",
                index:0
            },{
                title:"已发起",
                img:"../static/icon/feiji.svg",
                index:1
            },{
                title:"已处理",
                img:"../static/icon/yiwancheng2.svg",
                index:2
            }]
        }
    },
    methods:{
        handliclick(index){
            this.$emit("handliclick",index)
        }
    }
}
</script>

<style scoped lang="">
header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
}

header dl {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

header dl dt {
    width: 50%;
}

header dl dt img {
    width: 100%;
}
.router-link-exact-active{
    color:green;
}
</style>