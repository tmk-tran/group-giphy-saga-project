require("dotenv").config();

const express = require('express');
const pool = require('../modules/pool');
const axios = reequire("axios");
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

// Favorites category route
router.post('/favoriteCategory', (req, res) => {  
  const favoriteCategory = req.body;
  const queryText = `INSERT INTO "category_favorite" ("fav_id", "category_id")
                    VALUES ($1, $2)`;
  pool.query(queryText, [favoriteCategory.favorite_id, favoriteCategory.category_id])
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error inserting into category_favorite table', err);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put('/:favoriteId', (req, res) => {
  const favoriteId = req.params.favoriteId;
  // req.body should contain a category_id to add to this favorite image
  const updatedFavorite = req.body.category_id;

  const queryText = `UPDATE "category_favorite" SET "category_id" = $1 WHERE "fav_id" = $2`;
  pool.query(queryText, [updatedFavorite, favoriteId])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error updating category favorite', err);
      res.sendStatus(500);
    });
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
