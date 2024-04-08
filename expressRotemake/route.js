    const router = require('express').Router();

    router.get('/',(req,res)=>{
        console.log("Server Is Running...");
        res.end('Server is running');

    });

    module.exports = router;