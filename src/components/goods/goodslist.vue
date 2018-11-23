<template>
    <div class="goods-list">
        <div  class="goods-item" v-for="item in goodslist" :key="item.id"
         :to="'/home/goodsinfo/'+item.id"
         @click="getDetail(item.id)">
        <img :src="item.img_url">
        <h1 class="title">{{item.title}}</h1>
        <div class="info">
            <p class="price">
                <span class="now">${{item.sell_price}}</span>
                <span class="old">${{item.market_price}}</span>
            </p>
            <p class="sell">
                <span>hot buy</span>
                <span>{{item.stock_quantity}}</span>
            </p>
        </div>
   
         
        </div>
           <mt-button type="danger" size="large" @click="getmore()">more</mt-button>
    </div>
</template>
<script>
export default {
    data(){
      return{
        pageindex:1,
        goodslist:[]
      }
    },
    created(){
      this.getgoodslist()
    }
    ,
    methods:{
      getgoodslist(){
        this.$http.get('http://www.liulongbin.top:3005/api/getgoods?pageindex='+this.pageindex).then(res=>{
if(res.body.status === 0){
        this.goodslist=this.goodslist.concat(res.body.message);

      
}

        })
      },
      getmore(){
         this.pageindex++;
          this.getgoodslist()
      },
      getDetail(id){
       console.log(this)
this.$router.push({name:"goodsinfo",params:{id}});
      }
    }
}
</script>
<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
