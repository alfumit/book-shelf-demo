/**
 * Created by Alex on 26.07.2017.
 */

let express = require('express'),
  http = require('http'),
  app = express(),
 // router = require('server/routes'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  Book = require('./server/models/book.js');



mongoose.connect('mongodb://localhost:27017/test');

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH');
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


app.use(express.static(`${__dirname}/dist`));

// Go to routing
//app.use('/', router);

app.get("/svc/books", function(req, res) {
    Book.find(function(err, books) {
        if(err) res.status(400).send(err);
        res.status(200).send(books);
    })

});

app.post("/svc/books", function(req, res) {
    Book.create({
        'title': req.body.title || "Test",
        'authorFirstName': req.body.authorFirstName || "Test",
        'authorLastName': req.body.authorLastName || "Test",
        'pageNum': req.body.pageNum || 1000,
        'issuer': req.body.issuer || "Test",
        'issueYear': req.body.issueYear || 1000,
        'publishDate': req.body.publishDate || 1000,
        'ISBN': req.body.isbn || 1000,
        'image': 'https://www.kaspersky.com/content/en-global/images/homepage/logo.png'
    }, (err, book) => err ? res.send(err) : res.send(`Added ${book.title}`));
});

app.delete("/svc/books/:book_id", function(req, res) {
    Book.remove({
        _id : req.params.book_id
    }, (err) => err ? res.send(err) : res.send(`Removed ${req.params.book_id}`));
});

app.put("/svc/edit-book", function(req,res) {
  console.log(req.body.book);

  Book.update({_id: req.body._id}, req.body.book, {upsert: true})
    .then(() => {
      res.status(200).send("Updated the book");
    })
    .catch(() => {
      res.status(400).send("Failed");
    })
  ;

});

app.all('*', function(req, res) {
  res.sendFile('index.html', { root: `${__dirname}/dist` });
});

app.listen(3000, function(){
  console.log('Server started on port 3000');
});
