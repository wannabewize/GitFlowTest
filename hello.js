const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
    res.send('Hello Git Flow');
});

module.exports = router;