const express = require('express');
const config = require('./public/js/config');

const app = express();
app.use(express.urlencoded({ extended: false }));

app.all('/user', (req, res, next) => {
    console.log('Paso');
    next();
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/nosotros', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

app.get('/contacto', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});

app.get('/productos', (req, res) => {
    res.sendFile(__dirname + '/public/glasses.html');
});

app.get('/devoluciones', (req, res) => {
    res.sendFile(__dirname + '/public/shop.html');
});

app.use(express.static('public')); 

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(config.port, () => {
    console.log(`Corriendo en el puerto ${config.port}, http://localhost:3000`);
});
