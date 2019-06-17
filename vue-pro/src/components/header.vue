<template>
    <div class="header">
        <p><img src="../static/icon/ziyuanldpi.svg" alt=""></p>
        <p>加班/休假</p>
        <div class="icon">
            <p><img src="../static/icon/iconset0209.svg" alt=""></p>
            <router-link tag="p" to="/search"><img src="../static/icon/icon-test.svg" alt=""></router-link>
        </div>
    </div>
</template>
<style scoped lang="">
.header{
	width: 100%;
    height: 45px;
	display: flex;
	justify-content: space-between;
    align-items: center;
	padding: 0 15px;
	box-sizing: border-box;
}
.header p:nth-child(1){
    width: 30px;
    height: 30px;

}
.header p img{
    width: 100%;
}
.header p:nth-child(2){
    font-size: 22px;
    font-weight: bolder;
}
.icon{
    width: 60px;
    display:flex;
}
.icon p{
    width: 30px;
    height: 30px;
}
.icon p img{
    width: 100%;

}
</style>