const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get('/', async (req, res) => {
    const apiURL = 'http://5b35ede16005b00014c5dc86.mockapi.io/list';
    const response = await fetch(apiURL);
    const json = await response.json();

    res.json(json);
});

module.exports = router;
