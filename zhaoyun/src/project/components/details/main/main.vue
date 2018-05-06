<template>
    <div>
            <header class="de_header">
                <a class="back back-gray" @click="t_shouye">返回</a>
                <div class="info">团购详情</div>
            </header>             
            <div class="content group-info">
            <div class="headbar">            
                <div id="slider">
                    <ul>
                        <li><img :src="data.img" /></li>
                        <li><img :src="data.img"/></li>
                        <li><img :src="data.img"/></li>
                        <li><img :src="data.img"/></li>
                    </ul>                    
                </div>
                <div class="cont">
                        <h3>{{data.name}}</h3>
                        <p>仅售10.9元，价值45元周一至周日下午场欢唱3小时+单人饮料，节假日通用！免费WiFi！</p>
                </div>
                <div class="swipe-page-ctrl J_swipe_page_ctrl">
                    <strong class="J_swipe_page">3</strong>/3
                </div>
            </div>
            <div class="cost-box">
                <div class="buy-box">
                    <div class="price">¥</div>
                    <div class="price sum">{{data.avg}}</div>
                    <div class="past Fix">
                        <div class="t">
                            <span class="o-price">¥450</span>
                        </div>
                    </div>
                    <div class="last">
                    <a href="#" class="buy-btn" @click="t_tijiao">立即购买</a>
                    </div>
                </div>        
                <ul class="advantage ">
                        <li><i></i>随时可退</li>
                        <li><i class="dated"></i>过期自动退</li>
                </ul>
            </div>
            </div>    
            <div class="J_nearby_shop">
                <div class="detail-info">
                    <a href="javascript:void(0)" class="hd">适用商户(1)</a>
                    <div class="shoplist cont">
                        <div class="b-line">
                            <div class="flex-box">
                                <aside>
                                    <a href="#" onclick="_hip.push(['mv', {module: '5_deal_shop', action: 'click'}]);"><h3>{{data.name}}</h3>
                                        <p><span class="star-pic"><i style="width:70%"></i></span><span class="f-r ">&gt;100km</span></p>
                                    </a>
                                </aside>
                                <a class="dis call-link l-line" onclick="LXAnalytics(&quot;moduleClick&quot;, &quot;b_f38f2ma7&quot;, { &quot;deal_id&quot;:14530372, &quot;poi_id&quot;:21110437 }, {isLeave: 0});" href="#"><i></i></a>
                            </div>
                        </div>
                    <div class="col-list">
                        <div class="item" onclick="_hip.push(['mv', {module: '5_deal_allshop', action: 'click'}]);">
                            <div class="blo">
                            <i class="icon-comm location"></i>{{data.add}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
            <div class="detail-info group-detail">
                <div class="con">
                    <div class="info Fix">
                        <div class="detail-box"><h3 class="tit">团购详情<i class="icon-comm detail"></i></h3>
                            <div class="detail-tit"></div>
                            <table width="100%" cellpadding="0" cellspacing="0" class="detail-table">
                                <thead>
                                <tr>
                                    <th width="50%">名称</th>
                                    <th width="25%">数量</th>
                                    <th width="25%">单价</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr><th colspan="3">鸡排</th></tr>
                                    <tr>
                                        <td>正新鸡排</td>
                                        <td class="tc">1份</td>
                                        <td class="tc">15 元</td>
                                    </tr>
                                    <tr>
                                        <td>酸梅汁（赠）</td>
                                        <td class="tc">1份（部分店铺无赠品）</td>
                                        <td class="tc">5 元</td>
                                    </tr>
                                <tr class="total">
                                    <td></td>
                                    <td class="tc">最高价值<br><strong>团购价</strong></td>
                                    <td class="tc">20元<br><strong>10.9元</strong></td>
                                </tr>
                                </tbody>
                            </table>
                            <div>
                                <p>免费提供餐巾纸</p>
                                <p>本套餐的饮品部分属于赠品，购买或者消费前请咨询店里工作人员是否赠送，部分店铺不送饮品望请见谅。</p>
                            </div>
                        </div>
                    </div>
                    <a class="J_more-detail" data-id="17612261" title="更多图文详情" data-href="#">
                        <div class="all-shop">
                            更多图文详情<span class="notice-text">（建议Wifi环境下打开,土豪请随意）</span>
                            <i class="arrow-ent right"></i>
                        </div>
                    </a>
                </div>
            </div>        
            <div class="title-item" @click="tzcomment">网友点评(3027)<i class="arrowent"></i></div>
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
            <div class="detail-info buy-know">
                <div class="con">
                    <div class="detail-box">
                        <h3 class="tit">购买须知<i class="icon-comm buy"></i></h3>
                        <div class="detail-box">
                            <div class="purchase-notes">
                                <dl>
                                    <dt>有效期</dt>
                                    <dd>
                                        <p class="listitem">2016-01-27至2018-05-30</p>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>预约信息</dt>
                                    <dd>
                                        <p class="listitem">请您提前2小时预约，预约保留详情请您咨询商家</p>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>规则提醒</dt>
                                    <dd>
                                        <p class="listitem">商家根据使用人数安排包厢类型，详询商户</p>
                                        <p class="listitem">每张团购券仅限1人使用</p>
                                        <p class="listitem">每个包厢须4券及以上起用</p>
                                        <p class="listitem">不再与其他优惠同享</p>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>商家服务</dt>
                                    <dd>
                                        <p class="listitem">提供免费WiFi</p>
                                        <p class="listitem">提供免费停车位</p>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>温馨提示</dt>
                                    <dd>
                                        <p class="listitem">如需团购券发票，请您在消费时向商户咨询</p>
                                        <p class="listitem">为了保障您的权益，建议使用美团、点评网线上支付。若使用其他支付方式导致纠纷，美团、点评网不承担任何责任，感谢您的理解和支持！</p>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" class="buy-now "@click="t_tijiao">
            <span>立即购买</span>
            </a>            
    </div>
</template>
<script type="text/javascript">
    import http from '../../../utils/httpclients.js'
    export default {
        data(){
            return {
                data:{},
                myid:0
            }
        },
        mounted(){
            var id=this.$route.params.id;
            this.myid=id;
            http.get('myshuju').then((res)=>{
                //console.log(res.data)

                for(var i=0;i<res.data.length;i++){
                    if(i==id){
                        this.data=res.data[i];
                         console.log(this.data)
                    }
                }
            });
        },
        methods:{
            tzcomment(){
                this.$router.push({name:'pinglun'});
            },
            t_shouye(){
                this.$router.push({name:'shouye'});
            },
            t_tijiao(){
                http.get("users").then((res)=>{
                    //console.log(res);
                    if(res.status==true){
                        this.$router.push({path:"/tijiao/"+this.myid});
                    }else{
                        this.$router.push({name:'login'});
                    }
                });
            }
        }
    }
</script>