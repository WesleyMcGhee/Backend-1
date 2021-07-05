const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get("/api/users", (req, res) => {
    const friends = ['Nate', 'Rachel', 'Hunter'];
    res.status(200).send(friends);
  });

  app.get("/weather/:temperature", (req, res) => {
    const weather = `<h3> The weather is ${req.params.temperature} today`;
    res.status(200).send(weather);
  });

  app.get("/weather/:temperature", (req, res) => {
    const {temperature} = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
  });

  app.listen(4000, () => console.log("Server running on port 4000"));