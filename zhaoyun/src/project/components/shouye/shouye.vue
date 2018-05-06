<template>
    <div id="myCode">
        <header id='header'>
            <ul>
                <li @click="getcity"><span>广州</span></li>
                <li class="search">
                    <input type="text" placeholder="输入商家名"/>
                </li>
                <li @click='login'><img src="../../images/denglu.png" alt="" /></li>
            </ul>
        </header>
        <div class="carousel">
            <transition-group tag='ul' class="clearfix slide" name='image'>
                <li v-for='(image,index) in img' :key='index' v-show='index===mark'>
                    <a><img :src="image"></a>
                </li>
            </transition-group>
            <div class="bullet">
                <span v-for='(item,index) in img.length' :class="{'active':index===mark}" @click='change(index)'></span>
            </div>
        </div>
        <nav id='nav'>
            <ul>
                <li><a href=""><img src="../../images/food.png"/><p>美食</p></a></li>
                <li><a href=""><img src="../../images/buffet.png"/><p>自助餐</p></a></li>
                <li><a href=""><img src="../../images/hotpot.png"/><p>火锅</p></a></li>
                <li><a href=""><img src="../../images/ration.png"/><p>日本料理</p></a></li>
                <li><a href=""><img src="../../images/wine.png"/><p>酒</p></a></li>
                <li><a href=""><img src="../../images/food.png"/><p>美食</p></a></li>
                <li><a href=""><img src="../../images/buffet.png"/><p>自助餐</p></a></li>
                <li><a href=""><img src="../../images/hotpot.png"/><p>火锅</p></a></li>
                <li><a href=""><img src="../../images/ration.png"/><p>日本料理</p></a></li>
                <li><a href=""><img src="../../images/wine.png"/><p>酒</p></a></li>
            </ul>
        </nav>
        <main id="main">
            <h3>商家推荐</h3>
            <ul>
                <li @click="toDetails($event)" v-for="(obj,idx) in data" :title="idx">
                    <div class="picture">
                        <img :src="obj.img"/>
                    </div>
                    <div class="content">
                        <h4>{{obj.name}}</h4>
                        <p>{{obj.add}}</p>
                        <div class="price">
                            <p>{{obj.tel}}</p>
                            <span>人均：<i>{{obj.avg}}</i>元</span>
                        </div>
                    </div>
                </li>
            </ul>
        </main>
    </div>
</template>

<script>
    import http from '../../utils/httpclients.js';
  export default {
    data(){
        return {
            data:'',
            mark:0,
            timer:null,
            img:['src/project/images/test1.jpg','src/project/images/test2.jpg','src/project/images/test3.jpg','src/project/images/test4.jpg']
            }
    },
    props:['myid'],
    mounted(){
        this.play()
        http.get('myshuju').then((res)=>{
            this.data=res.data;
        })
    },
    methods:{
        toDetails:function(e){
            var id = $(e.target).parents("li")[0].title;
            this.my_id=3;
            this.$router.push({path:"/details/"+id});
        },
        login:function(){
            this.$router.push({path:'/login'});
        },
        change:function(i){
            this.mark = i
        },
        autoPlay:function(){
            this.mark++
            if (this.mark === 4) {
                this.mark = 0
                return
            }
        },
        play:function(){
            setInterval(this.autoPlay, 3000)
        },
        getcity(){
            this.$router.push({path:'/getcity'});
        }
    }
  }
</script>