const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/', async (req, res) => {
  const response = await fetch('http://5b35ede16005b00014c5dc86.mockapi.io/list');
  const jsonData = await response.json();

  res.json(jsonData);
});

module.exports = router;
