<template>
<div>
    <div class="lg_top">
        <div class="zuo">
            <img src="../../images/zuojian.png" alt="" @click="t_dl"/>
        </div>
        <div class="zhong">欢迎注册！</div>
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
    <div class="zc_btn" @click="reg">注册</div>
</div>
</template>

<script>
    import '../login/login.css';
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
            t_dl(){
                this.$router.push({name: 'login'});
            },
            reg(){
                http.post('reg', this.data).then((res) => {
                    console.log(res)
                    if(res){
                        alert("注册成功！");
                        this.$router.push({name: 'login'});
                    }
                }) 
            }
        }
    }
</script>