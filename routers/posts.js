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

// show => per visualizzare un elemento tramite id
router.get('/:id', function(req, res) {

  res.send('Dettagli dei post ' + reqparams.id);

})

// store => creare un elemento
router.post('/', function(req, res) {

  res.send('Creazione nuovo post ');
  console.log('Creazione nuovo post ');

});


// esportazione del router
module.exports = router;