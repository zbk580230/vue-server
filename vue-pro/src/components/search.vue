<template>
    <div class="wrap">
        <div class="titleInput">
            <p><img src="../static/icon/icon-test.svg" alt=""></p>
            <input type="text" placeholder="搜索">
            <p>取消</p>
        </div>
        <h4>搜索指定内容</h4>
        <div class="text">
            <p>加班类型</p>
            <p>发起时间</p>
            <p>加班日期</p>
            <p>申请单号</p>
            <p>加班时数</p>
        </div>
    </div>
</template>
<style scoped lang="">
.wrap{
    width: 100%;

}
.titleInput{
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
}
.titleInput p:nth-child(1){
    width: 30px;
    height: 30px;

}
.titleInput p img{
    width: 100%;
}
.titleInput input{
    width: 70%;
    height: 50%;
    border:none;
}
h4{
    width: 100%;
    text-align: center;
    margin-top: 50px;
    color:#ccc;
}
.text{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.text p{
    width: 33%;
    text-align: center;
    border-right: 1px solid #555;
    margin-top: 30px;
    color:yellowgreen;
}
.text p:nth-child(3),.text p:nth-child(5){
    border:none;
}
</style>