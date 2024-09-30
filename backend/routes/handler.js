const express = require('express');
const router = express.Router();


// STORE

router.get('/store', (req, res) => {
    // if anyone goes to url /store, return json code
    const str = [{
        "msg": "This is the Store Page",
        "img": "image of products",
        "specs": "specifications about this product"
    }];
    res.end(JSON.stringify(str));
})



// HOME

router.get('/home', (req, res) => {
    const str = [{
        "msg": "This is the Home Page",
        "img": "showcase images",
        "specs": "comments from buyers, etc"
    }];
    res.end(JSON.stringify(str));
})


module.exports = router;