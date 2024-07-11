const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');



const app = express();

// Configuration de la base de données
mongoose.connect('mongodb://localhost:27017/monprojet', { useNewUrlParser: true, useUnifiedTopology: true });

// Configuration de Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Chargement des données depuis les fichiers JSON
const matieresPremieres = JSON.parse(fs.readFileSync(path.join(__dirname, 'matieresPremieres.json'), 'utf8'));
const entreprises = JSON.parse(fs.readFileSync(path.join(__dirname, 'entreprises.json'), 'utf8'));
const categoriesMeubles = JSON.parse(fs.readFileSync(path.join(__dirname, 'categoriesMeubles.json'), 'utf8'));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'votre_secret',
    resave: false,
    saveUninitialized: true,
}));


// Route pour afficher les données
app.get('/', (req, res) => {
    res.render('index', { matieresPremieres, entreprises, categoriesMeubles });
  });

// Démarrage du serveur
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
