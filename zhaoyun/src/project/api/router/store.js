const db = require('../db/dbhelper')
const ObjectID = require('mongodb').ObjectID;

module.exports = {
    reg(app){
        app.get('/stores',async (req,res) => {
            let result = await db.select('Business');
            res.send(result)
        }),
        app.post('/delPro',async (req,res) => {
            let proId = req.body.pId
            console.log('pId：'+proId)

            let result = await db.remove('Business',{'_id':new ObjectID(proId)});
            res.send(result)
        }),
        app.post('/updatePro',async (req,res) => {
            let proId = req.body.pId
            console.log(
                'pId：'+proId,
                'name：'+req.body.name,
                'avg：'+req.body.avg,
                'add：'+req.body.add,
                'tel：'+req.body.tel,
                'img：'+req.body.img,
            )

            let data = {
                name:req.body.name,
                avg:req.body.avg,
                add:req.body.add,
                tel:req.body.tel,
                img:req.body.img
            }

            let result = await db.update('Business',{'_id':new ObjectID(proId)},{$set:data});
            res.send(result)
        })
    }
}
