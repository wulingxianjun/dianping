<template>
    <div>
        <h2>买家评论</h2>
        <datagrid :config="config" />
    </div>
</template>

<script>
    import datagrid from '../datagrid/datagrid'

    export default{
        data(){
            return {
                config:{
                    api:'comment',
                    cols:['type','price','qty']
                }
            }
        },
        components:{
            datagrid
        }
    }
</script>