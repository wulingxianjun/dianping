<template>
    <div>
        <h2>后台人员管理</h2>
        <datagrid :config="config" />
    </div>
</template>

<script>
    import datagrid from '../datagrid/datagrid'
    import http from '../../utils/httpclients'
    export default{
        data(){
            return {
                config:{
                    api:'staff',
                    cols:['username','password']
                }
            }
        },
        components:{
            datagrid
        },
        mounted(){
            http.get("users").then((res)=>{
                console.log(res);
            })
        }
    }
</script>