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
app.get('/', (req, res) => {
  UserModel.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.get('/getUser/:id', (req, res)=>{
  const id = req.params.id;
  UserModel.findById({_id:id})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.post("/createUser",(req, res)=>{
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

// Default 404 route
app.use((req, res) => res.status(404).send('Not found'));

// Start server
app.listen(PORT, () => {
  console.log(`🚀Server is running on port ${PORT}`);
});