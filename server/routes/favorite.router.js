const express = require("express");
const pool = require("../modules/pool");

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
});

// return all favorite images
router.get("/", (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post("/", (req, res) => {
  res.sendStatus(200);
});

// Favorites category route
router.post("/favoriteCategory", (req, res) => {
  const favoriteCategory = req.body;
  const queryText = `INSERT INTO "category_favorite" ("fav_id", "category_id")
                    VALUES ($1, $2)`;
  pool
    .query(queryText, [
      favoriteCategory.favorite_id,
      favoriteCategory.category_id,
    ])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error inserting into category_favorite table", err);
      res.sendStatus(500);
    });
});

// delete a favorite
router.delete("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
