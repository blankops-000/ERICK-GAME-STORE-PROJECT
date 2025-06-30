const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const games = [
  {
    id: 1,
    title: "Cyber Punk 2077",
    genre: "Action",
    rating: "4.8/5",
    image: "images/cyber.jpeg"
  },
  {
    id: 2,
    title: "Call of Duty: Modern Warfare",
    genre: "Action",
    rating: "4.5/5",
    image: "images/cod.jpeg"
  },
  {
    id: 3,
    title: "Last of Us",
    genre: "Horror",
    rating: "4.6/5",
    image: "images/The Last of Us.jpeg"
  }
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Game-Verse API!');
});

// Get all games
app.get('/api/games', (req, res) => {
  res.json(games);
});

// Get a single game by ID
app.get('/api/games/:id', (req, res) => {
  const game = games.find(g => g.id === parseInt(req.params.id));
  if (game) {
    res.json(game);
  } else {
    res.status(404).json({ error: "Game not found" });
  }
});

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});