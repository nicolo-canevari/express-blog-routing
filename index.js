// importo il pacchetto express
const express = require('express');

// creo l'applicazione Express per configurare il server e le rotte
const app = express();

// porta su cui il server ascolterà le richieste HTTP
const port = 3000;

// importo il router dei post
const postRouter = require('./routers/posts');

// gestione dei file statici della cartella 'public'
app.use(express.static('public'));

// definisco la rotta principale
app.get('/', (req, res) => {

    // http://localhost:3000
    res.send('Server del mio blog')

});

// gestione della rotta di posts
app.use("/posts", postRouter);

// funzione che "ascolta" la porta 3000
app.listen(port, () => {

    // stampo sul terminale
    console.log(`Server in ascolto sulla porta ${port}`)
    
});



