module.exports = function(controller){

    var express = require('express');
    var router = express.Router();

    router.get('/', controller.read);//route users read
    router.post('/', controller.create);//route users create
    router.put('/', controller.update);//route users update
    router.delete('/', controller.delete);//route users delete
    
    return router;
};
