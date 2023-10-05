require("dotenv").config();

const express = require('express');
const pool = require('../modules/pool');
const axios = require("axios");
const router = express.Router();

//get api request for giphy search
router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}`
    );
    res.send(response.data);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
})

// return all favorite images
router.get('/', (req, res) => {
  const queryText = "SELECT * FROM favorites;"
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Error completing SELECT category query', err);
      res.sendStatus(500);
    })
});

// add a new favorite
router.post('/', async (req, res) => {
  try {
    const poolQuery = `INSERT INTO "favorites" ("url")
    VALUES ($1);`
    
    const response = await pool.query(poolQuery, [req.body.url]);
    res.sendStatus(201);
  } catch (err) {
    console.log ('error in posting favorites', err)
  res.sendStatus(200);
  }
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  const favoriteID = req.params.favoriteId
  // req.body should contain a category_id to add to this favorite image
  const updatedFavorite = req.body.category_id;

  const queryText = `UPDATE `
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
