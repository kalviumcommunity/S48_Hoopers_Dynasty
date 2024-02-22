const express = require('express');
const router = express.Router();

let players = [
  { id: 1, player_name: "Stephen Curry", team: "Golden State Warriors" },
  { id: 2, player_name: "Michael Jordan", team: "Chicago Bulls" },
  { id: 3, player_name: "Kobe Bryant", team: "Los Angeles Lakers" }
];

// Get all players
router.get('/players', (req, res) => {
  res.json(players);
});

// Get player by ID
router.get('/players/:id', (req, res) => {
  const playerId = parseInt(req.params.id);
  const player = players.find(player => player.id === playerId);
  if (!player) {
    return res.status(404).json({ message: 'Player not found' });
  }
  res.json(player);
});

// Add a new player
router.post('/players', (req, res) => {
  const { id, player_name, team } = req.body;
  if (!id || !player_name || !team) {
    return res.status(400).json({ message: 'Please provide id, player_name, and team' });
  }
  const newPlayer = { id, player_name, team };
  players.push(newPlayer);
  res.status(201).json(newPlayer);
});

// Update player by ID
router.put('/players/:id', (req, res) => {
  const playerId = parseInt(req.params.id);
  const { player_name, team } = req.body;
  const playerIndex = players.findIndex(player => player.id === playerId);
  if (playerIndex === -1) {
    return res.status(404).json({ message: 'Player not found' });
  }
  players[playerIndex] = { ...players[playerIndex], player_name, team };
  res.json(players[playerIndex]);
});

// Delete player by ID
router.delete('/players/:id', (req, res) => {
  const playerId = parseInt(req.params.id);
  const playerIndex = players.findIndex(player => player.id === playerId);
  if (playerIndex === -1) {
    return res.status(404).json({ message: 'Player not found' });
  }
  const deletedPlayer = players.splice(playerIndex, 1);
  res.json(deletedPlayer[0]);
});

module.exports = router;
