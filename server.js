const express = require('express');
const serverStatic = require('server-static');
const path = require('path');

const app = express();

app.use('/miniburg', serverStatic(path.join(__dirname, '/build')));


const port = process.env.PORT || 3000;

app.listen(port);