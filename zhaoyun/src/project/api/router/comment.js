const request = require('request');
const apiResult = require('../apiResult')

const url = "http://data.gateio.io/api2/1/orderBook/btc_usdt";

module.exports ={
    reg(app){
        app.get('/comment',(req,res) => {
            request.get(url,(error,response,body) => {
                body = JSON.parse(body);

                let trades = [];
                for(let items of body.asks){
                    trades.push({type:'asks',price:items[0],qty:items[1]})
                }
                for(let items of body.bids){
                    trades.push({type:'bids',price:items[0],qty:items[1]})
                }
                res.send(apiResult(true,trades))
            })
        })
    }
}