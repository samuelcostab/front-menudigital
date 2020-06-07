const express = require('express');
const path = require('path');
const { createEngine } = require('express-react-views');


const app = express();

app.use(express.static(path.join(__dirname,"build")));

app.get('/miniburg', (req, res) => {
})

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log("Server Rodando na porta 3000"); });
