const MongoClient = require('mongodb').MongoClient;
const apiResult=require('../apiResult.js')
const url = 'mongodb://localhost:27017';
var db=null;
MongoClient.connect(url, function(err, client) {
    db=client.db('gz1801');
    
});

module.exports={
    async select(biaoming,fanwei={}){
        try{
            let items= await db.collection(biaoming).find(fanwei).toArray();
            return apiResult(items.length>0, items);
        }catch(err){
            return apiResult(false, error);
        }
    },
    async insert(biaoming,data){
        try{
            var result=await db.collection(biaoming).insert(data);
            return apiResult(result.insertedCount>0,result.result);
        }catch(err){
            return apiResult(false, error);
        }
    },
    async remove(_collection,params){
        console.log('REMOVE==>')
        const items = await db.collection(_collection).remove(params)
        return ar(true,items)
    }
}