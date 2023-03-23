const express = require('express');
const router = require('./router');
const errorMiddleware = require('./middlewares/errorMiddelware');

const app = express();

app.use(router);
app.use(errorMiddleware);

module.exports = app;