const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/players');
const routes = require('./routes');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://Madan:madan%402430@cluster0.vawcexm.mongodb.net/BasketballPlayers");

// Routes
app.use('/', routes);

// Additional route
app.get('/getuser', (req, res) => {
  UserModel.find()
    .then(players => res.json(players))
    .catch(err => console.log(err));
});

// Default 404 route
// app.use((req, res) => res.status(404).send('Not found'));

// Start server
app.listen(PORT, () => {
  console.log(`🚀Server is running on port ${PORT}`);
});