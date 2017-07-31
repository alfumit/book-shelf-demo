'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const bookSchema = mongoose.Schema({
    'title': String,
    'authorFirstName': String,
    'authorLastName': String,
    'pageNum': Number,
    'issuer': String,
    'issueYear': Number,
    'publishDate': Date,
    'ISBN': Number,
    'image': String
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
