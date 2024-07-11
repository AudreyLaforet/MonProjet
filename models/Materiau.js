const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MateriauSchema = new Schema({
  nom: { type: String, required: true, unique: true },
  entreprise_id: { type: Schema.Types.ObjectId, ref: 'Entreprise', required: true },
});

module.exports = mongoose.model('Materiau', MateriauSchema);
