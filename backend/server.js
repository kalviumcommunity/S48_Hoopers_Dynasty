const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { PlayersModel, PlayersValidation } = require('./models/players');
const { UserModel, UserValidation } = require('./models/user'); 
const jwt = require('jsonwebtoken')
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;
mongoose.connect(process.env.DB_CONNECTION_STRING);

app.get('/getPlayers', (req, res) => {
  PlayersModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

app.get('/getUsers', (req, res) => {
  UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

app.get('/getPlayers/:id', (req, res) => {
  const id = req.params.id;
  PlayersModel.findById({ _id: id })
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

app.get('/getUsers/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

app.put('/updatePlayers/:id', (req, res) => {
  const id = req.params.id;
  PlayersModel.findByIdAndUpdate({_id:id}, req.body)
    .then(updatedPlayers => res.json(updatedPlayers))
    .catch(err => res.status(500).json(err));
});

app.delete('/deletePlayer/:id', (req, res) => {
  const id = req.params.id;
  PlayersModel.findByIdAndDelete({ _id: id })
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.post('/login', async (req, res) => {
  try {
    // Validate request body using Joi
    const { error, value } = UserValidation.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Check if the user exists
    const { username , email, password } = value;
    const user = await UserModel.findOne({ username });

    const accessToken = jwt.sign({username},process.env.ACCESSTOKEN_SECRET)

    if (!user || user.password !== password) {
      return res.status(401).json({ success: false, message: "Invalid username or password" });
    }

    res.json({ success: true, message: "Login successful",accessToken:accessToken });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "An error occurred during login" });
  }
});

app.post("/createPlayer", async (req, res) => {
  try {
    const { fullName, imageURL, team, statistics, achievement,createdby } = req.body;

    // Validate request body using Joi
    const { error } = PlayersValidation.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Check if the username already exists
    const playerCheck = await PlayersModel.findOne({ fullName });
    if (playerCheck) {
      return res.status(400).json({
        success: false,
        message: "FullName already exists",
      });
    }
    // Create a new user
    const newPlayer = new PlayersModel({
      fullName,
      imageURL,
      team,
      statistics,
      achievement,
      createdby
    });
    await newPlayer.save();

    res.json({
      success: true,
      message: "User created successfully",
      user: newPlayer,
    });
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error creating user:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the user",
    });
  }
});


app.post("/createUser", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Validate request body using Joi
    const { error } = UserValidation.validate({ username, email, password });
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Check if the username already exists
    const userCheck = await UserModel.findOne({ username });
    if (userCheck) {
      return res.status(400).json({
        success: false,
        message: "Username Already exists",
      });
    }

    // Create a new user
    const newUser = new UserModel({
      username,
      email,
      password
    });
    await newUser.save();

    res.json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error creating user:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the user",
    });
  }
});

app.use((req, res) => res.status(404).send('Not found'));

app.listen(PORT, () => {
  console.log(`🚀Server is running on port ${PORT}`);
});
