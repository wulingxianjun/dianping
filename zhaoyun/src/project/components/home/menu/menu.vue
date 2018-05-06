<template>
    <ul>
        <li v-for="obj in menus" :key="obj.path">
            <router-link :to="obj.path">{{obj.text}}</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        data(){
            return {
                menus:[
                    {path:'/home/staff',text:'后台人员管理'},
                    {path:'/home/users',text:'用户账号管理'},
                    {path:'/home/stores',text:'商家信息'},
                    {path:'/home/comment',text:'买家评论'}
                ]
            }
        }
    }
</script>