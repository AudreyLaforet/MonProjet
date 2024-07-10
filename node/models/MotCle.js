const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MotCleSchema = new Schema({
  nom: { type: String, required: true },
  materiau_id: { type: Schema.Types.ObjectId, ref: 'Materiau', required: true },
  meuble_id: { type: Schema.Types.ObjectId, ref: 'Meuble', required: true },
});

module.exports = mongoose.model('MotCle', MotCleSchema);
