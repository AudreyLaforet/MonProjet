const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrepriseSchema = new Schema({
  nom: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Entreprise', EntrepriseSchema);
