const express = require('express');
const app = express();

const world = require('./world');
app.use(world);

const hello = require('./hello');
app.use(hello);


app.listen(3000);