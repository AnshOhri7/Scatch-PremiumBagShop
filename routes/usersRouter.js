const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {  
    res.send("hey User");
    // res.render('owners/index', { title: 'Scatch - Premium Bag E-commerce Shop' });
});

module.exports = router;