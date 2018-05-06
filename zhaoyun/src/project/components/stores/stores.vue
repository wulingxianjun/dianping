<template>
    <div>
        <h2>商家信息</h2>
        <datagrid :config="config" />
    </div>
</template>

<script>
    import datagrid from '../datagrid/datagrid1'

    export default{
        data(){
            return {
                config:{
                    api:'stores',
                    cols:['_id','name','avg','add','tel','img']
                }
            }
        },
        components:{
            datagrid
        }
    }
</script>