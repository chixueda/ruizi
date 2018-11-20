<template>
    <div class="cmt-container">
<h3>发表评论</h3>
<hr>
<textarea placeholder="font max 120 length" maxlength="120" v-model="msg"></textarea>
<mt-button type="primary" size="large" @click="postcomment">发表评论</mt-button>

<div class="cmt-list">
    <div class="cmt-item" v-for="(item,index) in comments" :key="index">
      <div class="cmt-title">
        第{{index+1}}楼&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time |dateFormat}}
      </div>
      <div class="cmt-body">
       {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}
      </div>
    </div>
</div>

<mt-button type="danger" size="large" plain @click="getmore()">more</mt-button>
</div>

 

</template>
<script>
import {Toast}from "mint-ui";
export default {
    data(){
        return{
            pageIndex:1,
            comments:[],
            msg:""//评论输入的内容
        }
    },
    created(){
this.getComments()

    },
    methods:{
        getComments(){
            this.$http.get("http://www.liulongbin.top:3005/api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(res=>{
if(res.body.status===0){
// this.comments =res.body.message;
this.comments =this.comments.concat(res.body.message)
console.log(this.comments)
}else{
    Toast("huoqushibai!");
}
            })
        },
       getmore(){
           this.pageIndex++;
           this.getComments();
       },
       postcomment(){
           if(this.msg.trim().length===0){
  return Toast("评论内容不能为空")
           }
           this.$http.post("http://www.liulongbin.top:3005/api/postcomment/"+this.$route.params.id,{
               content:this.msg.trim()}).then(res=>{
if(res.body.status===0){

let cmt={user_name:'匿名用户',
add_time:Date.now(),
content:this.msg.trim()};
this.comments.unshift(cmt);
this.msg ="";
}
           })
       }
    },
     props:["id"]
}
</script>
<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size:14px;
        height: 85px;
        margin: 0;
    }

    .cmt-list{
        margin: 10px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
background-color: #ccc;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}
</style>

