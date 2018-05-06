<template>
    <div>
        <h1>交易管理</h1>
        <datagrid :config="config" ref="a"/>
    </div>
</template>

<script>
    import datagrid from '../datagrid/datagrid.vue';

    export default {
        data(){
            return {
                config: {
                    api: 'transition',
                    cols: ['type', 'price','qty']
                }
            }
        },
        mounted(){
            console.log(this.$refs.a);
        },
        components: {
            datagrid     
        }
    }
</script>