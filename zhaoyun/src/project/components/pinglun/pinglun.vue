<template>
    <div>
        <header class="C_header border-bottom-new ">
            <a class="left-btn"  @click="tzdetails">
                <div class="back-icon"></div>
                <span class="text"></span>
            </a>
            <div class="title">网友点评</div>
            <a class="right-btn"><span class="text"></span></a>
        </header>    
        <div class="J_reviewlist">
            <div class="standardBord">                
            </div>
            <div class="comments-list">
                <a class="comment-item" href="#"><div class="user-pic"><img class="pic" src="https://p0.meituan.net/userheadpicbackend/ca85f07f301435589a3aeb3ebe37c70022337.jpg%4048w_48h_1e_1c_1l%7Cwatermark%3D0"><img class="level" src="https://p0.meituan.net/gpa/roundlv4.png"></div><div class="comment-detail"><div class="comment"><div class="username">chownatalie</div><span class="time">3月19日</span><div class="quality"></div><div class="info"><span class="star star-40"></span><span class="avg-price">￥65/人</span></div><div class="comment-entry not-spread">晚上快8点到店还要排队~等了大概10分钟！
                店内就是大排档风格~
                特价乳鸽跟鸽汤都可以点！点了就全单不开发票~
                乳鸽有点过火了~不够嫩，少了点肉汁！特价也差不多了~
                鸽汤有点淡，虽然里面真的有鸽子两三块~不过味道没有特别甜！
                果汁猪排，挺大份的！大排档味道，还可以~
                干瘪四季豆，分量还可以，味道也不错~
                煎酿豆腐，也是挺多的，肉比较少，豆腐没有很滑的感觉，不过不失吧！肉真的有点少了~
                反正大排档的价格与质量，别追求太多就好了</div><span class="get-all hide"></span></div><div class="dishPic"><div class="imgFrame"><img src="//qcloud.dpfile.com/pc/jnI8h5__kANDoPNAFoYtrXD8-Ecp-BYwrnWeiIRNyvwwusUejJgMErZYEqdaX3MfGybIjx5eX6WNgCPvcASYAw.jpg" alt="广饮讲食鸽子皇评论图片" class="picExample" data-bigurl="//qcloud.dpfile.com/pc/jnI8h5__kANDoPNAFoYtrXD8-Ecp-BYwrnWeiIRNyvwwusUejJgMErZYEqdaX3Mfd376ss-jT4ZOn1XtrMhDPw.jpg"></div><div class="imgFrame"><img src="//qcloud.dpfile.com/pc/5ZZ_wcHRYP_AvjDTH8C-PE1cNUW5MagMpMagYTZYG2AzT_DHfqHPpoJ3fKALjcNcGybIjx5eX6WNgCPvcASYAw.jpg" alt="广饮讲食鸽子皇评论图片" class="picExample" data-bigurl="//qcloud.dpfile.com/pc/5ZZ_wcHRYP_AvjDTH8C-PE1cNUW5MagMpMagYTZYG2AzT_DHfqHPpoJ3fKALjcNcd376ss-jT4ZOn1XtrMhDPw.jpg"></div><div class="imgFrame"><img src="//qcloud.dpfile.com/pc/r-bDfVbo-h51ReZnaxtVQa7x8E7oOq6WXYqPPGVD4oaUCtqyR-ocveGozzal2Q_9GybIjx5eX6WNgCPvcASYAw.jpg" alt="广饮讲食鸽子皇评论图片" class="picExample" data-bigurl="//qcloud.dpfile.com/pc/r-bDfVbo-h51ReZnaxtVQa7x8E7oOq6WXYqPPGVD4oaUCtqyR-ocveGozzal2Q_9d376ss-jT4ZOn1XtrMhDPw.jpg"><div class="imgNum"><i></i><span>5</span></div></div></div><div class="info"><span>浏览6890</span><span>赞4</span></div></div></a>
                <a class="comment-item" href="#"><div class="user-pic"><img class="pic" src="https://p1.meituan.net/userheadpicbackend/15b6d2a8f1e115482a9f688444424b9699419.jpg%4048w_48h_1e_1c_1l%7Cwatermark%3D0"><img class="level" src="https://p0.meituan.net/gpa/roundlv6.png"></div><div class="comment-detail"><div class="comment"><div class="username">细舆媚砜</div><span class="time">2月5日</span><div class="quality"></div><div class="info"><span class="star star-40"></span><span class="avg-price">￥80/人</span></div><div class="comment-entry not-spread">昨晚去吃噶晚饭一直味道不错👍，不过就是不能提前预留座位要自己去拿位囖、点了一条鱼起片清蒸很鲜甜嫩滑 另外红烧乳鸽吃了二只 盐焗一只 另外一大煲乳鸽饭果真分量十足👍、另外沙姜捞鹅掌很好吃哟、芝士番茄🍅很不错👍、不过这店铺基本是没有停车位的过来吃饭最好坐地铁或者公交车囖、另外晚饭基本六点后要等位的</div><span class="get-all hide"></span></div><div class="dishPic"><div class="imgFrame"><img src="//qcloud.dpfile.com/pc/PtQ5yKMyawMcslZ3auB3liib1fUQ-58-7bbe_CwD8Rp-FuZ3w5EpWFPvAI_GsRmdGybIjx5eX6WNgCPvcASYAw.jpg" alt="广饮讲食鸽子皇评论图片" class="picExample" data-bigurl="//qcloud.dpfile.com/pc/PtQ5yKMyawMcslZ3auB3liib1fUQ-58-7bbe_CwD8Rp-FuZ3w5EpWFPvAI_GsRmdd376ss-jT4ZOn1XtrMhDPw.jpg"></div><div class="imgFrame"><img src="//qcloud.dpfile.com/pc/Ow5qPNoput--wy3kPnApx2nQG3ihiHgnoc1WgDqfDpInC5tacyrnsfycSXExtz4DGybIjx5eX6WNgCPvcASYAw.jpg" alt="广饮讲食鸽子皇评论图片" class="picExample" data-bigurl="//qcloud.dpfile.com/pc/Ow5qPNoput--wy3kPnApx2nQG3ihiHgnoc1WgDqfDpInC5tacyrnsfycSXExtz4Dd376ss-jT4ZOn1XtrMhDPw.jpg"></div><div class="imgFrame"><img src="//qcloud.dpfile.com/pc/TMsgqdybcBtQuwKcqsWKiiEvtmG3ROLJJEkCwcXBkQc36-xvDGHosSE8LMjFc96QGybIjx5eX6WNgCPvcASYAw.jpg" alt="广饮讲食鸽子皇评论图片" class="picExample" data-bigurl="//qcloud.dpfile.com/pc/TMsgqdybcBtQuwKcqsWKiiEvtmG3ROLJJEkCwcXBkQc36-xvDGHosSE8LMjFc96Qd376ss-jT4ZOn1XtrMhDPw.jpg"><div class="imgNum"><i></i><span>10</span></div></div></div><div class="info"><span>浏览12235</span><span>赞26</span><span>评论3</span></div></div></a>
                <a class="comment-item" href="#"><div class="user-pic"><img class="pic" src="https://p1.meituan.net/userheadpicbackend/a025e9ffd5c6339b1d585cbb9a61b1d22233.jpg%4048w_48h_1e_1c_1l%7Cwatermark%3D0"><img class="level" src="https://p0.meituan.net/gpa/roundlv5.png"></div><div class="comment-detail"><div class="comment"><div class="username">依存免疫体</div><span class="time">3月31日</span><div class="quality"></div><div class="info"><span class="star star-40"></span><span class="avg-price">￥70/人</span></div><div class="comment-entry not-spread">男朋友家附近的饭店，鸽子的价格和味道可以媲美我家这边这家，用券买可以省钱。那个时间好像都要等位……还好有二楼没有让我们等很久。中规中矩的一间中餐馆吧，我们点的都是基本菜式，味道差不了多少。不过二楼的服务好像有点慢。</div><span class="get-all hide"></span></div><div class="dishPic"><div class="imgFrame"><img src="//qcloud.dpfile.com/pc/aCRcDZZ-eiUVMEtTrqV7af2z_3ua7DlNSoj5fFae1TaS0ObEd69xzr4GE8FwsjxoGybIjx5eX6WNgCPvcASYAw.jpg" alt="广饮讲食鸽子皇评论图片" class="picExample" data-bigurl="//qcloud.dpfile.com/pc/aCRcDZZ-eiUVMEtTrqV7af2z_3ua7DlNSoj5fFae1TaS0ObEd69xzr4GE8Fwsjxod376ss-jT4ZOn1XtrMhDPw.jpg"></div><div class="imgFrame"><img src="//qcloud.dpfile.com/pc/28yyM9iXuS2DSFxxNr3RlWqyHqlnqQGgUZOvr3poK62fmYbFgDvGla7ZFu3eeOLXGybIjx5eX6WNgCPvcASYAw.jpg" alt="广饮讲食鸽子皇评论图片" class="picExample" data-bigurl="//qcloud.dpfile.com/pc/28yyM9iXuS2DSFxxNr3RlWqyHqlnqQGgUZOvr3poK62fmYbFgDvGla7ZFu3eeOLXd376ss-jT4ZOn1XtrMhDPw.jpg"></div><div class="imgFrame"><img src="//qcloud.dpfile.com/pc/tR5bXhr6wC6Ewu81KuJ3EKFWa_CGjYG0Ioz64FmQwrsmpoyeBPQOJE4vOdYZwm9AGybIjx5eX6WNgCPvcASYAw.jpg" alt="广饮讲食鸽子皇评论图片" class="picExample" data-bigurl="//qcloud.dpfile.com/pc/tR5bXhr6wC6Ewu81KuJ3EKFWa_CGjYG0Ioz64FmQwrsmpoyeBPQOJE4vOdYZwm9Ad376ss-jT4ZOn1XtrMhDPw.jpg"><div class="imgNum"><i></i><span>5</span></div></div></div><div class="info"><span>浏览4252</span></div></div></a>
            </div>
        </div>
        <div class="dianping">
            <textarea class="wenben" v-model='cont.content'></textarea>
            <button class="btn">提交评论</button>
        </div>   
    </div>   
</template>

<script type="text/javascript">
    import '../../css/pinglun.css';
    import http from '../../utils/httpclients.js'
    export default{
        data(){
            return{
                cont:{
                    username:'',
                    content:'',
                    img:'src/project/images/1.jpg',
                    mydate:'',
                    price:'66',
                },
            }
        },
        methods:{
            tzdetails(){
                //this.$router.push({name:'details'})
                this.$router.go(-1);
            }
        },
        mounted(){
            http.get('users').then((res)=>{
                console.log(res)
            });
            var list = document.querySelector('.comments-list');
            var wenben = document.querySelector('.wenben');
            var btn = document.querySelector('.btn');
            var date = new Date();
            var mon = date.getUTCMonth()+1;
            var day = date.getDate();
            var riqi=`${mon}月${day}日`;
            
            btn.onclick = function(){

                var liulan = parseInt(Math.random()*10000);
                var zan = parseInt(Math.random()*100);
                list.innerHTML+=`
                    <a class="comment-item" href="#">
                    <div class="user-pic">
                    <img class="pic" src="https://p0.meituan.net/userheadpicbackend/ca85f07f301435589a3aeb3ebe37c70022337.jpg%4048w_48h_1e_1c_1l%7Cwatermark%3D0">
                    <img class="level" src="https://p0.meituan.net/gpa/roundlv4.png">
                    </div><div class="comment-detail">
                    <div class="comment"><div class="username">chownatalie</div><span class="time">${mon}月${day}日</span><div class="quality"></div><div class="info"><span class="star star-40"></span><span class="avg-price">￥66/人</span></div>
                            <div class="comment-entry not-spread">
                                ${wenben.value}
                                </div>
                                    <span class="get-all hide"></span>
                                </div>
                                <div class="info"><span>浏览${liulan}</span><span>赞${zan}</span></div>
                            </div>
                            </a> 
                        `  
                wenben.value='';
                wenben.focus();
                /*http.get('users').then((res) => {
                    console.log(res)
                    this.cont.username = res.username;
                })
                this.cont.mydate=riqi;
                console.log(this.data)
                http.post('addcomment',this.data).then((res)=>{
                    console.log(res)
                });*/
            }                   
        }
    }


</script>