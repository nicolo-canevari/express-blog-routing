// importo express
const express = require('express');
// creo un router
const router = express.Router();

// importo array di posts contenuto in data
const posts = require('../data/posts');

// rotta per ottenere la lista dei post
router.get('/', (req, res) => {

  res.send('Lista dei post');

});

// show => per visualizzare un elemento tramite id
router.get('/:id', function (req, res) {

  res.send('Dettagli dei post ' + reqparams.id);

})

// store => creare un elemento
router.post('/', function (req, res) {

  res.send('Creazione nuovo post ');
  console.log('Creazione nuovo post ');

});

// update => per modificare l'elemento
// put prende tutto l'elemento
router.put('/:id', function (req, res) {

  res.send('Lista dei post ' + req.params.id);

});

// delete => per cancellare un elemento
router.delete('/:id', function(req, res) {

  res.send('Cancella post post' + req.params.id);

});


// esportazione del router
module.exports = router;