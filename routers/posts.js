// importo express
const express = require('express');

// creo un router
const router = express.Router();

// importo array di posts
const posts = require('../data/posts');

module.exports = posts;