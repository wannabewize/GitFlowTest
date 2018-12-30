const express = require('express');
const app = express();


const hello = require('./hello');
app.use(hello);

app.get('/goodNight', (req, res) => {
    res.send('good night~ sweet dream!');
});

app.listen(3000);