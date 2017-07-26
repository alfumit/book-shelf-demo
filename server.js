/**
 * Created by Alex on 26.07.2017.
 */

let express = require('express'),
  http = require('http'),
  app = express(),
 // router = require('server/routes'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/test');

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let db = mongoose.connection;
db.on('error', function(err) {
  console.log('Database error:', err.message);
  app.all('*', function(req, res) {
    res.status(500).send('Unable to connect to database');
  });
});

db.once('open', function() {
  console.log('Database Connected');
});


app.use(express.static(__dirname));

// Go to routing
//app.use('/', router);

app.all('*', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(3000, function(){
  console.log('Server started on port 3000');
});
