const express = require('express');
const app = express();

const goodNight = require('./goodNight2');
app.use(goodNight);

<<<<<<< HEAD
<<<<<<< HEAD
const hello3 = require('./hello3');
app.use(hello3);

=======
>>>>>>> hello2 feature
=======
>>>>>>> hello2 feature
const hello2 = require('./hello2');
app.use(hello2);

app.listen(3000);