<template>
<div>
    <div class="daimg"></div>
    <main id="dl_main">
        <img src="../../images/dl_zhong.png" alt="" class="fl dl_zhong"/>
        <div class="dl fl" v-show="data.xian1">
            <div class="tou">
                <div class="deng sjh fl">手机号登录</div>
                <div class="deng yx fl">邮箱登录</div>
            </div>
            <div class="zhu">
                <p class="shiyan"><img src="../../images/suo.png" alt="" />使用密码验证登录</p>
                <div class="bo"><img src="../../images/shouji2.png" alt=""  class="shouji2"/><input type="text" class="username" placeholder="请输入手机号" v-model="data.username"/></div>
                <p class="ts ts1">*该用户不存在</p>
                <input type="password" class="password" placeholder="请输入密码" v-model="data.password"/>
                <p class="ts ts2">*密码错误</p>
                <div class="yanzheng">
                    <input type="text" class="yan fl" placeholder="请输入验证码" ref="yanzheng"/><div class="yzm fl" ref="suiji">3838</div>
                </div>
                <p class="ts ts3">*验证码错误</p>
                <button class="dl_btn" @click="login">登录</button>
                <div><input type="checkbox" class="gou"/> 10天免登录<span class="yudao fr">遇到问题？</span></div>
            </div>
            <div class="wei">
                <img src="../../images/duof.png" alt="" /><span class="fr tiao_zhuce" @click="t_zc">手机快速注册<img src="../../images/dayuhao.png" alt="" /></span>
            </div>
        </div>
        <div class="zhuce fl" v-show="!data.xian1">
            <div class="tou">
                <div class="deng sjh fl">欢迎注册</div>
                <div class="fl">已有帐号？<span class="qudenglu" @click="t_dl">去登录></span></div>
            </div>
            <div class="zhu">
                <div class="bo"><img src="../../images/shouji2.png" alt=""  class="shouji2"/><input type="text" class="username" placeholder="请输入手机号" v-model="data.username"/></div>
                <p class="ts ts5">*请输入正确的手机号</p>
                <input type="password" class="password password1" placeholder="请输入密码" v-model="data.password"/>
                <p class="ts ts6">*密码由6-20个数字/字母组成</p>
                <input type="password" class="password password2" placeholder="请确认密码"/>
                <p class="ts ts7">*两次输入的密码不一致</p>
                <div class="yanzheng">
                    <input type="text" class="yan fl" placeholder="请输入验证码"/><div class="yzm fl">3838</div>
                </div>
                <p class="ts ts8">*验证码错误</p>
                <button class="dl_btn" @click="reg">注册</button>
                <div><input type="checkbox" class="gou" checked /> 我同意《服务条款》和《网易隐私政策》</div>
            </div>
        </div>
    </main>
</div>
</template>

<script>
    import './houtai.css';
    import http from '../../utils/httpclients.js';
    
    export default {
        data(){
            return {
                data: {
                    username: '',
                    password: '',
                    xian1:true
                }
            }
        },
        mounted(){
            var daimg=$(".daimg");
            daimg.click(function(){
                location.href="../index.html";
            })
             var code=$(".yanzheng .yzm");
             var zimu='qwertyuiopasdfghjklzxcvbnm1234567890';
            yanzhengma1();
            yanzhengma2();
            function yanzhengma1(){
                var res='';
                for(var i=0;i<4;i++){
                    res+=zimu[parseInt(Math.random()*36)];
                }
                code[0].innerHTML=res;
            };
            function yanzhengma2(){
                var res='';
                for(var i=0;i<4;i++){
                    res+=zimu[parseInt(Math.random()*36)];
                }
                code[1].innerHTML=res;
            };
            code[0].onclick=function(){
                yanzhengma1();
            };
            code[1].onclick=function(){
                yanzhengma2();
            };
             var shoujihao=$(".zhuce .zhu .bo .username");
             var zc_pass1=$(".zhuce .password1");
             var zc_pass2=$(".zhuce .password2");
             var zc_btn=$(".zhuce .dl_btn");
             var dl_btn=$(".dl .dl_btn");
             var zc_yan=$(".zhuce .yan");
             var dl_yan=$(".dl .yan");
             var ts5=$(".zhuce .ts5");
             var ts6=$(".zhuce .ts6");
             var ts7=$(".zhuce .ts7");
             var ts8=$(".zhuce .ts8");
             var ts1=$(".dl .ts1");
             var ts2=$(".dl .ts2");
             var ts3=$(".dl .ts3");
             var dl_shoujihao=$(".dl .bo .username");
             var dl_mima=$(".dl .password");
             dl_shoujihao.on("change",function(){
                var _dl_shoujihao=dl_shoujihao.val();
                if(!(/^1[34578]\d{9}$/.test(_dl_shoujihao))){ 
                    ts1.css({"visibility":"visible"});
                    return false;
                }else{
                    ts1.css({"visibility":"hidden"});
                };
             });
             dl_btn.on("click",function(){
                //var dl_ts=$(".dl .ts");
                if(dl_yan.val()!=code[0].innerHTML){
                    ts3.css({"visibility":"visible"});
                    return false;
                }else{
                    ts3.css({"visibility":"hidden"});
                };
            });

             shoujihao.on("change",function(){
                var _shoujihao=shoujihao.val();
                if(!(/^1[34578]\d{9}$/.test(_shoujihao))){ 
                    ts5.css({"visibility":"visible"});
                    return false;
                }else{
                    ts5.css({"visibility":"hidden"});
                };
             });
             zc_pass1.on("change",function(){
                var _zc_pass1=zc_pass1.val();
                if(!/^[^\s]{6,20}$/.test(_zc_pass1)){
                    ts6.css({"visibility":"visible"});
                    return false;
                }else{
                    ts6.css({"visibility":"hidden"});
                }
             });
             zc_pass2.on("change",function(){
                var _zc_pass2=zc_pass2.val();
                if(!/^[^\s]{6,20}$/.test(_zc_pass2)){
                    ts7.css({"visibility":"visible"});
                    return false;
                }else{
                    ts7.css({"visibility":"hidden"});
                }
             });

             zc_btn.on("click",function(){
                //var zc_ts=$(".zhuce .ts");
                if(zc_yan.val()!=code[1].innerHTML){
                    ts8.css({"visibility":"visible"});
                    return false;
                }else{
                    ts8.css({"visibility":"hidden"});
                };
             })
        },
        methods: {
            t_zc(){
                this.data.xian1=!this.data.xian1;
            },
            t_dl(){
                this.data.xian1=!this.data.xian1;
            },
            login(){
                http.post('login', this.data).then((res) => {
                    if(res.status){
                        alert("登录成功！");
                        window.localStorage.setItem('token', res.data);
                        this.$router.push({name: 'home'});
                    }else{
                        alert("登录失败！");
                    }
                }) 
            },
            reg(){
                http.post('reg', this.data).then((res) => {
                    console.log(res)
                    if(res){
                        alert("注册成功！");
                        this.$router.go(0);
                        this.data.xian1=!this.data.xian1;
                    }
                }) 
            }
        }
    }
</script>