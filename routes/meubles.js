const express = require('express');
const router = express.Router();
const Meuble = require('../models/Meuble');

// Get all furniture
router.get('/', async (req, res) => {
  const meubles = await Meuble.find().populate('categorie_id');
  res.json(meubles);
});

// Add new furniture
router.post('/', async (req, res) => {
  const { nom, categorie_id } = req.body;
  const newMeuble = new Meuble({ nom, categorie_id });
  await newMeuble.save();
  res.json(newMeuble);
});

module.exports = router;
