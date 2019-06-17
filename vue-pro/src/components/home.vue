<template>
	<div class="home">
		<titleHeader />
		<titleNav  @handliclick="handliclick"/>
		<titleTab  @handbtn="handbtn" :arr="arr" />
		<p class="btn" @click="fn">+发起任务</p>
		<div class="mask" v-show="flag" @click="func">
			<div class="text">
				<dl>
					<dd><img src="../static/icon/jiabanshixiang.svg" alt=""></dd>
					<dt>加班</dt>
				</dl>
				<dl>
					<dd><img src="../static/icon/xiujia.svg" alt=""></dd>
					<dt>休假</dt>
				</dl>
			</div>
		</div>
	</div>
</template>
<script>


import request from "../util/request"


import header from "./header"
import nav from "./nav"
import tab from "./tab"

export default {
	components: {
		titleHeader: header,
		titleNav: nav,
		titleTab: tab
	},
	data() {
		return {
			flag: false,
			str:{
				status:0,
				type:"overTime",
				create_at:0,
				pageSize:10,
				page:1
			},
			arr:[]
		}
	},
	created(){
		this.getlist()
	},
	methods: {
		//遮罩层显示隐藏
		fn() {
			this.flag = !this.flag;
		},
		func() {
			this.flag = !this.flag;
		},
		handliclick(index){
			this.str.status=index
			this.getlist()
		},
		handbtn(index,type){
			this.str.type=type
			this.getlist()
		},
		getlist(){
			request.get("/api/task/list",{
				...this.str
			}).then(res=>{
				this.arr=res.data
				// console.log(res)
			})
		}
	}
	
}
</script>
<style scoped lang="">
.home {
	width: 100%;
	height: 100%;
}


.mask {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5)
}

.text {
	width: 100%;
	height: 100px;
	display: flex;
	background: #fff;
	justify-content: space-around;
	position: absolute;
	bottom: 0;
	left: 0;
	align-items: center;
}

.text dl {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.text dl dd {
	width: 50px;
	height: 50px;
}

.text dl dd img {
	width: 100%;
}



.btn {
	position: fixed;
	bottom: 15px;
	right: 10px;
	padding: 15px 25px;
	background: green;
	color: #fff;
	text-align: center;
	border-radius: 30px;
}
</style>
