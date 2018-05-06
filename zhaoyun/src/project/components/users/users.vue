<template>
    <div>
        <h1>用户管理</h1>
        <datagrid :config="config"/>
    </div>
</template>

<script>
    import datagrid from '../datagrid/datagrid.vue';

    export default {
        data(){
            return {
                config: {
                    api: 'users',
                    cols: ['username', 'password']
                }
            }
        },
        components: {
            datagrid     
        }
    }
</script>