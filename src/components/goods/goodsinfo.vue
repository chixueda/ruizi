<template>
    <div>
<h3>xxxx</h3>
<span @click="goodsforback()">ss</span>
    </div>
</template>
<script>
export default {
    data(){},
    methods:{
        goodsforback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
