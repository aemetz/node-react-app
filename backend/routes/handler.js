const express = require('express');
const router = express.Router();


// STORE

router.get('/store', (req, res) => {
    // if anyone goes to url /store, return json code
    const str = [{
        "id": 1001,
        "name": "Name of Product",
        "img": "Image of product",
        "specs": "specifications about this product",
        "price": "$149.99"
    }, {
        "id": 1002,
        "name": "Table",
        "img": "image of table",
        "specs": "specifications of this table",
        "price": "$219.49"
    },
    {
        "id": 1003,
        "name": "Name of Product",
        "img": "Image of product",
        "specs": "specifications about this product",
        "price": "$149.99"
    },
    {
        "id": 1004,
        "name": "Name of Product",
        "img": "Image of product",
        "specs": "specifications about this product",
        "price": "$149.99"
    },
    {
        "id": 1005,
        "name": "Name of Product",
        "img": "Image of product",
        "specs": "specifications about this product",
        "price": "$149.99"
    },
    {
        "id": 1006,
        "name": "Name of Product",
        "img": "Image of product",
        "specs": "specifications about this product",
        "price": "$149.99"
    },
    {
        "id": 1007,
        "name": "Name of Product",
        "img": "Image of product",
        "specs": "specifications about this product",
        "price": "$149.99"
    },
    {
        "id": 1008,
        "name": "Name of Product",
        "img": "Image of product",
        "specs": "specifications about this product",
        "price": "$149.99"
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