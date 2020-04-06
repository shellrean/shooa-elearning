const express = require('express');
const app = express();

/**
 * Register all your routes here
 */
app.use('/user', require('./v1/user'));
app.use('/subject', require('./v1/subject'));
app.use('/classroom', require('./v1/classroom'));


module.exports = app;