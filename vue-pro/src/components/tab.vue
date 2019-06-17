<template>
    <div>

        <div class="nav">
            <div class="tab">
                <p v-for="item in list" :key="item.index" :class="{'selected':tab===item.index,'active':true}" @click="tabBtn(item.index,item.type)">{{item.title}}</p>
            </div>
            <div class="pic">
                <p><img src="../static/icon/quanxuan.svg" alt=""></p>
                <p><img src="../static/icon/paixu.svg" alt="" @click="$router.push({path:`/sorting`})"></p>
            </div>
        </div>
        <div class="container">
            <div v-for="item in list" :key="item.index" class="listTitle" v-if="tab === item.index">
                <div v-for="(item,index) in arr" :key="index" @click="$router.push({path:`/detail`})" class="list">
                    <h3>
                        <p>{{item.applicationNumber}}</p>
                        <p>待审批</p>
                    </h3>
                    <div class="title">
                        <p>申请人
                            <em>{{item.nickname}}</em>
                        </p>
                        <p>加班类型
                            <em>{{item.describes}}</em>
                        </p>
                        <p>加班日期
                            <em>{{item.startTime}}</em>
                        </p>
                        <p>加班时数
                            <em>{{item.type}}</em>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    props: {
        arr: Array
    },
    data() {
        return {
            tab: 1,
            list: [{
                title: "加班",
                type: "overTime",
                index: 1
            }, {
                title: "休假",
                type: "vacation",
                index: 2
            }]
        }
    },
    methods: {
        //   加班/休假的切换
        tabBtn(index, type) {
            this.tab = index;
            this.$emit("handbtn", index, type)
        },
        click() {
            console.log(0)
        }
    }
}
</script>
<style scoped lang="">
.nav {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 22px;
    position: relative;
}

.nav .tab {
    border: 1px solid green;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    overflow: hidden;
}

.nav .tab p {
    padding: 7px 25px;
}

.selected {
    background: green;
    color: #fff;
}

.listTitle {
    width: 100%;

    margin-top: 20px;
}

.list {
    width: 100%;
    display: flex;
    padding: 15px;
    box-sizing: border-box;
    flex-direction: column;
    background: #fff;
    margin: 15px 0;
}

.list h3 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: normal;
    color: #ccc;
}

.title {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.title p {
    width: 50%;
    margin: 10px 0;
    color: #666;
}

.title p em {
    font-style: normal;
    margin-left: 10px;
    font-weight: bolder;
    color: #000;
}

.pic {
    width: 70px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    right: 0px;
    top: 0px;
}

.pic p {
    width: 30px;
    height: 30px;
}

.pic p img {
    width: 100%;
}
</style>