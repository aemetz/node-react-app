const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
    // if anyone goes to url /home, return json code
    const str = [{
        "msg": "This is the Home Page"
    }];
    res.end(JSON.stringify(str));
})

// If you wanted to post a tweet or photo, here is where you would have
// a post request -> router.post('/postPhoto', ...)

module.exports = router;