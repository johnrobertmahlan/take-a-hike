const express = require('express');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');
const port = process.env.PORT || 3001;

require('dotenv').config();
require('./config/database');


const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/hikes', require('./routes/api/hikes'));
app.use('/', require('./routes/api/comments'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function() {
    console.log(`Express is listening on port: ${port}`);
});