
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var appRoutes = require('./routes/app-routes');
var mongoose = require('mongoose');
var environment = require('dotenv');

app.use(bodyparser.json());
app.use('', appRoutes.initRoutes());

environment.config();

const dbConString = process.env.DBCONString;
console.log(dbConString);
//mongoose.connect(dbConString, { useNewUrlParser: true, useFindAndModify: false})

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App now listening on port: '+ port)