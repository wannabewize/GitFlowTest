const express = require('express');
const router = express.Router();

router.get('/goodNight2', (req, res) => {
    res.send('Sweet dream!');
});

module.exports = router;