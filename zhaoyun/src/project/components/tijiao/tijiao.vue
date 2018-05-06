<template>
<div>
    <div class="lg_top">
        <div class="zuo">
            <img src="../../images/zuojian.png" alt="" @click="fanhui"/>
        </div>
        <div class="zhong">提交订单</div>
        <div class="jia"></div>
    </div>
    <div class="shangpin">
        {{data.shangpin}}
        <span class="fr">X{{data.num}}</span>
    </div>
    <div class="shuji">
        <div class="shuliang liang">
            数量
            <span class="fr jia weizhi weizhi2" @click="jia">+</span>
            <input type="number" v-model="data.num" class="fr num weizhi2"/>
            <span class="fr jian weizhi weizhi2" @click="jian">-</span>
        </div>
        <div class="xiaoji liang">
            小计
            <span class="fr xj">￥{{data.xiaoji}}</span>
        </div>
    </div>
    <div class="quan">
        现金券/抵用券/优惠码
        <span class="fr dayu">></span>
    </div>
    <div class="dl_btn">提交订单</div></div>
</template>

<script>
    import http from '../../utils/httpclients.js';
    export default {
        data(){
            return {
                data:{
                    shangpin:'广饮讲食鸽子皇广饮讲食鸽子皇红烧乳鸽',
                    num:1,
                    danjia:9.90,
                    xiaoji:0,
                }
            }
        },
        mounted(){
            var id=this.$route.params.id;
            http.get('myshuju').then((res)=>{
                console.log(res.data)

                for(var i=0;i<res.data.length;i++){
                    if(i==id){
                        this.data.shangpin=res.data[i].name;
                        this.data.danjia=res.data[i].avg;
                        this.data.xiaoji=(this.data.danjia*this.data.num).toFixed(2);
                    }
                }
            });
        },
        methods:{
            jia(){
                this.data.num+=1;
                this.data.xiaoji=(this.data.danjia*this.data.num).toFixed(2);
            },
            jian(){
                this.data.num-=1;
                if(this.data.num<=1){
                    this.data.num=1;
                }
                this.data.xiaoji=(this.data.danjia*this.data.num).toFixed(2);
            },
            fanhui(){
                //this.$router.push({name:'details'});
                this.$router.go(-2);
            }
        }
    }
</script>