// importo il pacchetto express
const express = require('express');
// creo l'applicazione Express per configurare il server e le rotte
const app = express();
// porta su cui il server ascolterà le richieste HTTP
const port = 3000;


// gestine dei file statici della cartella 'public'
app.use(express.static('public'));



// definisco la rotta principale
app.get('/', (req, res) => {

    // http://localhost:3000
    res.send('Server del mio blog')

});


// creazione rotta dell'array di oggetti
app.get('/bacheca', (req, res) => {

const posts = [

    {
        titolo: 'Ciambellone',
        contenuto: 'Contenuto del primo post',
        immagine: 'http://localhost:3000/images/ciambellone.jpeg',
        tags: ['nodejs', 'express'],
    },
    {
        titolo: 'Cracker Barbabietola',
        contenuto: 'Contenuto del secondo post',
        immagine: 'http://localhost:3000/images/cracker_barbabietola.jpeg',
        tags: ['nodejs', 'express'],
    },
    { 
        titolo: 'Pane fritto dolce',
        contenuto: 'Contenuto del terzo post',
        immagine: 'http://localhost:3000/images/pane_fritto_dolce.jpeg',
        tags: ['nodejs', 'express'],
    },
    {
        titolo: 'Pasta barbabietola',
        contenuto: 'Contenuto del quarto post',
        immagine: 'http://localhost:3000/images/pasta_barbabietola.jpeg',
        tags: ['nodejs', 'express'],
    },
    {
        titolo: 'Torta paesana',
        contenuto: 'Contenuto del quinto post',
        immagine: ' http://localhost:3000/images/torta_paesana.jpeg',
        tags: ['nodejs', 'express'],
    }

];

res.json(posts);

});

// funzione che "ascolta" la porta 3000
app.listen(port, () => {

    // stampo sul terminale
    console.log(`Server in ascolto sulla porta ${port}`)
    
});




