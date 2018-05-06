<template>
<div>
    <div class="lg_top">
        <div class="zuo">
            <img src="../../images/zuojian.png" alt="" @click="fanhui"/>
        </div>
        <div class="zhong">帐号密码登录</div>
        <div class="jia"></div>
    </div>
    <div class="lg_main">
        <div class="user">
            <label for="username" class="yonghu">用户名</label><input type="text" class="username" placeholder="用户名" v-model="data.username"/>
        </div>
        <div class="pass">
            <label for="password" class="mima">密码</label><input type="text" class="password" placeholder="密码" v-model="data.password"/>
        </div>
    </div>
    <div class="dl_btn" @click="login">登 录</div>
    <p class="wang">忘记密码？<span class="fr" @click="t_zc">注册帐号</span></p>
</div>
</template>

<script>
    import './login.css';
    import http from '../../utils/httpclients.js';

    export default {
        data(){
            return {
                data: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            t_zc(){
                this.$router.push({name: 'reg'});
            },
            login(){
                http.post('login', this.data).then((res) => {
                    if(res.status){
                        alert("登录成功！");
                        this.$router.go(-2);
                        window.localStorage.setItem('token', res.data);
                        //this.$router.push({name: 'home'});
                    }else{
                        alert("密码错误！");
                    }
                }) 
            },
            fanhui(){
                this.$router.go(-1);
                //this.$router.push({puth:"/shouye/"+this.username});
            }
        }
    }
</script>