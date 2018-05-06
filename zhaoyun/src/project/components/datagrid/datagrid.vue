<template>
    <div id="div1">
        <table class="table">
            <thead>
                <tr>
                    <th v-for="(col, idx) in config.cols" :key="idx">{{col}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="obj in dataset" :key="obj.username">
                    <td v-for="(col, idx) in config.cols" :key="idx">&nbsp;{{obj[col]}}&nbsp;&nbsp;&nbsp;</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
    import http from '../../utils/httpclients'

    export default {
        data(){
            return {
                dataset: []
            }
        },
        props: ['config'],
        mounted(){
            http.get(this.config.api).then((res) => {
                this.dataset = res.data
            })
        },
    }
</script>