const express = require('express');
const cors = require('cors');
const route  = require('./src/routes');

const app = express()

app.use(cors());
app.options('*', cors())

app.use('/api/v1', route)

module.exports = app;