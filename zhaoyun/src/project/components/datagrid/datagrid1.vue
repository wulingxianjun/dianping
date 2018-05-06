<template>
    <div id="div1">
        <table class="table">
            <thead>
                <tr>
                    <th v-for="(col,idx) in config.cols" :key="idx">{{col}}</th>
                    <th>change</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(obj,idx) in dataset" :key="idx">
                    <td v-for="(col,idx) in config.cols" @click="edit(obj._id,obj.name,obj.avg,obj.add,obj.tel,obj.img,idx)">{{obj[col]}}</td>
                    <td><input type="button" value="确认编辑" @click="editPro({_id,name,avg,add,tel,img})" /><input type="button" value="删除" @click="del(obj._id,idx)" /></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import http from '../../utils/httpclients'
    //import jquery from ''

    export default{
        data(){
            return {
                dataset:[]
            }
        },
        props:['config'],
        mounted(){
            http.get(this.config.api).then((res) => {
                this.dataset = res.data
            })
        },
        methods:{
            // 编辑商品
            edit(_id,name,avg,add,tel,img,idx){
                console.log(
                    'id：'+_id,
                    'name：'+name,
                    'avg：'+avg,
                    'add：'+add,
                    'tel：'+tel,
                    'img：'+img,
                    'idx：'+idx
                )
            },
            editPro(obj){
                console.log(obj)
            },
            // 删除商品
            del(id,idx){
                this.dataset.splice(idx,1);
                http.post('delPro',{pId:id}).then((res) => {

                })
            }
        }
    }
</script>