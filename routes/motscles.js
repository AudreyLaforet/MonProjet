const express = require('express');
const router = express.Router();
const MotCle = require('../models/MotCle');

// Get all keywords
router.get('/', async (req, res) => {
  const motscles = await MotCle.find().populate('materiau_id').populate('meuble_id');
  res.json(motscles);
});

// Add new keyword
router.post('/', async (req, res) => {
  const { nom, materiau_id, meuble_id } = req.body;
  const newMotCle = new MotCle({ nom, materiau_id, meuble_id });
  await newMotCle.save();
  res.json(newMotCle);
});

module.exports = router;
