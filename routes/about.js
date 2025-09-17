const express = require('express');
const router = express.Router();
router.get('/', (req, res) =>{
    res.json({
        "name": "Muhammad Bilal",
        "status": "Backend in prgress..."
    })
})

module.exports = router;