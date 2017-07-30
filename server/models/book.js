'use strict';

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var bookSchema = mongoose.Schema({
    'title': String,
    'authorFirstName': String,
    'authorLastName': String,
    'pageNum': Number,
    'issuer': String,
    'issueYear': Number,
    'publishDate': Number,
    'ISBN': Number,
    'image': String
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;