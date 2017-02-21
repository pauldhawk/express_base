var express = require('express');
var path = require('path');
var compression  = require('compression'); 

var app = express();

/// static vars
let env = process.env.NODE_ENV || 'development';
let port = 3000;
let node_path = '../otto-angular/node_modules';
let dist_path = '../otto-angular/dist';
let index_path = dist_path + '/index.html';

// midleware
app.use(compression());  

// routes
app.use(express.static(dist_path));
app.use('/node_modules', express.static(node_path));
// server index.html
app.get('/', function(req, res) {
    res.sendFile(index_path);
});

// start server
app.listen(port);
console.log(`Server running on ${port}`);
