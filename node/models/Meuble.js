const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MeubleSchema = new Schema({
  nom: { type: String, required: true },
  categorie_id: { type: Schema.Types.ObjectId, ref: 'Categorie', required: true },
});

module.exports = mongoose.model('Meuble', MeubleSchema);
