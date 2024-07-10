const express = require('express');
const router = express.Router();
const Categorie = require('../models/Categorie');

// Get all categories
router.get('/', async (req, res) => {
  const categories = await Categorie.find();
  res.json(categories);
});

// Add new category
router.post('/', async (req, res) => {
  const { nom } = req.body;
  const newCategorie = new Categorie({ nom });
  await newCategorie.save();
  res.json(newCategorie);
});

module.exports = router;
