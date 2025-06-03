// server.js
const express = require('express');
const app = express();

app.use(express.json());

const authorizedUsernames = ["lol3929030", "zawarudochai12"];

app.post('/api/validate-user', (req, res) => {
  const { username } = req.body;
  
  if (authorizedUsernames.includes(username)) {
    res.json({ authorized: true });
  } else {
    res.json({ authorized: false });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
