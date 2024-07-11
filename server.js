const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/materiaux', require('./routes/materiaux'));
app.use('/entreprises', require('./routes/entreprises'));
app.use('/categories', require('./routes/categories'));
app.use('/meubles', require('./routes/meubles'));
app.use('/motscles', require('./routes/motscles'));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/monprojet', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
