<template>

    <div>

<div class="mui-content">
            <mt-swipe :auto="4000">
  <mt-swipe-item v-for="item in lunolist" :key="item.id">
           <img :src= "item.img" alt="">
        </mt-swipe-item>

</mt-swipe>
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		              <router-link to="home/newslist">     <img src="../../images/menu1.png">
		                    <div class="mui-media-body">新闻资讯</div> </router-link></li>
		             
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		               <router-link to="home/photolist">      <img src="../../images/menu2.png">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                     <img src="../../images/menu3.png">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu4.png">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../images/menu5.png">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                      <img src="../../images/menu6.png">
		                    <div class="mui-media-body">联系我们</div></a></li>
		          
		        </ul> 
		</div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui';
    export default{
data(){
    return{
   lunolist:[]


    }
},
created(){
    this.getlunbo();
},
methods:{
getlunbo(){
    this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(res=>{
      
        this.lunolist=res.data.message;
        Toast("chenggong")
  console.log(this.lunolist)
  console.dir;
    })
}

}

    }
</script>
<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{

&:nth-child(1){
background-color: blanchedalmond;

    }
&:nth-child(2){
background-color:azure;

    }
    &:nth-child(3){
background-color:brown;

    }
    img{
        width:100%;
        height: 100%;
    }
    }
}
.mui-grid-view.mui-grid-9 {
  border: none;
  background-color: #ffffff; 
  img{
      width:60px;
      height:60px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
border:0;}
</style>
