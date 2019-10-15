const express = require('express');
const bodyParser = require('body-parser');
const { TeamMember } = require('./model');

const app = express();
const router = express.Router();

app.use('/', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/team', async (req, res, next) => {
  const team = await TeamMember.findAll();
  return res.json(team);
});

app.post('/new', (req, res, next) => {
  let addition = req.body;
  console.log('addition', addition);
  TeamMember.create(addition);
  return res.json(addition);
})

module.exports = app;
