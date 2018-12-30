const express = require('express');
const router = express.Router();

router.get('/hello3', (req, res) => {
    res.send('Hello3');
});

module.exports = router;