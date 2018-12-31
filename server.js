const express = require('express');
const app = express();

const world = require('./world');
app.use(world);


app.listen(3000);