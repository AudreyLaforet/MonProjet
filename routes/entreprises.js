const express = require('express');
const router = express.Router();
const Entreprise = require('../models/Entreprise');

// Get all enterprises
router.get('/', async (req, res) => {
  const entreprises = await Entreprise.find();
  res.json(entreprises);
});

// Add new enterprise
router.post('/', async (req, res) => {
  const { nom } = req.body;
  const newEntreprise = new Entreprise({ nom });
  await newEntreprise.save();
  res.json(newEntreprise);
});

module.exports = router;
