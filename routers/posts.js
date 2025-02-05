// importo express
const express = require('express');
// creo un router
const router = express.Router();

// importo array di posts
const posts = require('../data/posts');

// rotta per ottenere la lista dei post
router.get('/', (req, res) => {

  res.send('Lista dei post');

});

// show per visualizzare un elemento tramite id
router.get('/:id', function(req, res) {

  res.send('Dettagli dei post ' + reqparams.id);

})


// module.exports = posts;