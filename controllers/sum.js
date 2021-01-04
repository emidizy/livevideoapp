
var test = require('../database/test-schema');

class Sum {
    getSum(req, res){
        let digit = req.param.num || 0;
        const sum = digit + 10;
        const resp = {
            sum: sum
        }
        res.status(200).send(resp);
    }

    async comp(userIds){
        const condition = {
            id: {$in: userIds}
        }
        await test.find(condition, {regDate: 0})
        .then(data=>{
            if(data.length == 0){

            }
            else{
                
                for(var user of data){
                    const userInfo = user.toJSON();
                }
            }
        })
        .catch(err=>{

        })
        
    }
}

module.exports = new Sum();