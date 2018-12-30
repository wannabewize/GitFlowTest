const express = require('express');
const app = express();

const goodNight = require('./goodNight2');
app.use(goodNight);

const hello3 = require('./hello3');
app.use(hello3);

app.listen(3000);