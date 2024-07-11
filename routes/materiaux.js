// server/routes/materiaux.js
const express = require('express');
const router = express.Router();
const Materiau = require('../models/Materiau');

// Get all materials
router.get('/', async (req, res) => {
  try {
    const materiaux = await Materiau.find().populate('entreprise_id');
    res.json(materiaux);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new material
router.post('/', async (req, res) => {
  const { nom, entreprise_id } = req.body;
  const newMateriau = new Materiau({ nom, entreprise_id });
  try {
    await newMateriau.save();
    res.status(201).json(newMateriau);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
