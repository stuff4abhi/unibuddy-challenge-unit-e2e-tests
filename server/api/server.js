const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()

const getLogic = require('../application/controller');

app.use(bodyParser());
app.use(cors());
const port = 3001

app.post('/', getLogic);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;
