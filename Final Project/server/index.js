const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

// Handle signup data
app.post('/api/signup', (req, res) => {
  const { username, password } = req.body;
  console.log('Received signup data:', { username, password });

  const responseMessage = `User ${username} registered successfully`;
  res.json({ message: responseMessage });
});

// Authenticate a user
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Received login data:', { username, password });

  const responseMessage = `Welcome back, ${username}!`;
  res.json({ message: responseMessage });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
