const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');


const app = express();

// Configuration de la base de données
mongoose.connect('mongodb://localhost:27017/monprojet', { useNewUrlParser: true, useUnifiedTopology: true });

// Configuration de Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'votre_secret',
    resave: false,
    saveUninitialized: true,
}));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Accueil' });
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
