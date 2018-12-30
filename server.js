const express = require('express');
const app = express();

const goodNight = require('./goodNight2');
app.use(goodNight);

app.listen(3000);