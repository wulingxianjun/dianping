const jwt = require('jsonwebtoken');
const db = require('../db/dbhelper')
const apiResult = require('../apiResult')

const filter = (req,res,next) => {
    let token = req.headers['auth'];
    if(!token){
        res.send(apiResult(false,{},'unauth'))
    }else{
        jwt.verify(token,'123456',(error,result) => {
            if(error){
                res.send(apiResult(false,error,'unauth'))
            }else{
                next()
            }
        })
    }
}

module.exports = {
    reg(app){
        app.post('/login',async (req,res) => {
            console.log(req.body)
            let username = req.body.username;
            let password = req.body.password;

            let result = await db.select('staff',{username,password})

            if(result.status){
                let token = jwt.sign({username},'123456',{expiresIn:60*60})
                let ar = apiResult(result.status,token)
                res.send(ar)
            }else{
                res.send(result)

            }
        })

        app.get('/staff',filter,async (req,res) => {
            let result = await db.select('staff');
            res.send(result)
        })
    }
}