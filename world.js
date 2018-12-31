const express = require('express');
const router = express.Router();

router.get('/world', (req, res) => {
    res.send('World! World! World!');
});

module.exports = router;