<template>
    <div>
        <div class="x_header">
            <hd></hd>
        </div>
        <div class="x_menu">
            <menus />
        </div>
        <div class="x_body">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import './home.css'
    import http from '../../utils/httpclients'

    import hd from './header/header.vue'
    import menus from './menu/menu.vue'

    export default{
        components:{
            hd,
            menus
        },
        mounted(){
            http.get("users").then((res)=>{
                console.log(res);
            })
        }
    }
</script>