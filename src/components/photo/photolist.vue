<template>
   <div>
      	
			<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll" >
					
						<a  :class="['mui-control-item ',item.id==0?'mui-active':'']" href="#item1mobile"  v-for="item in cates":key="item.id" @click="getphotoscateid(item.id);" >
							{{item.title}}
						</a>
					
					</div>
				</div>

			</div>
		  <ul class="photo-list">
<router-link v-for="item in list":key="item.id" :to="'/home/photoinfo/'+item.id" tag="li"> 
<img v-lazy="item.img_url">
<div class="info">
	<h1 class=" info-title">{{item.title}}</h1>
	<div class="body">{{item.zhaiyao}}</div>
</div>
</router-link>

		  </ul>
       </div> 
</template>
<script>
import mui from "../../assets/mui.min.js"

export default {
    data(){
		return{

			cates:[],
			list:[]
		};

		},
		created(){
			this.gettallcategory();
			this.getphotoscateid(0);
		},
				methods:{
					gettallcategory(){
this.$http.get("http://www.liulongbin.top:3005/api/getimgcategory").then(res=>{
	if(res.body.status===0){
		res.body.message.unshift({title:"全部",id:0})
		this.cates=	res.body.message
	}
})},
getphotoscateid(cateId){
//根据分类ID，获取图片列表
this.$http.get('http://www.liulongbin.top:3005/api/getimages/'+cateId).then(res=>{
	if(res.body.status===0){
this.list=res.body.message
	}
})
}
	},
	mounted(){
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
	}
}
</script>
<style lang="scss" scoped>
*{
	touch-action: pan-y
}
.photo-list{
	list-style-type: none;
	margin: 0;
	padding: 10px;
	padding-bottom: 0;

	li
	{margin-bottom:10px; 
	 text-align: center;
	 background-color: #ccc;
     box-shadow:0 0 6px #999;
		 position: relative;
		 img{width: 100%;
		
		     vertical-align:middle;
		    }
img[lazy="loading"]{
	width: 40px;
	height:300px;
	margin:auto;
}
.info{
	color:white;
	text-align: left;
	position: absolute;
	bottom: 0;
	background-color: rgba(0,0,0,0.4);
	max-height: 84px;
		.info-title{
font-size: 14px;
	}
	.info-body{
font-size:13px;
	}
}
	}
}

</style>
