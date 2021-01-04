const express = require('express');
const sum = require('../controllers/sum');


class AppRoutes {
    
    initRoutes(){
        var router =  express.Router();
        router.get('/', (req, res)=>{
            let response = {
                code: '00',
                message: 'Welcome to Test API'
            }
            res.status(200).send(response);
        });

        router.get('/sum', sum.getSum);
        return router;
    }

}

module.exports = new AppRoutes();