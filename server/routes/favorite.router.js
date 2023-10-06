const express = require('express');
const pool = require('../modules/pool');
const axios = require("axios");
const router = express.Router();

//get api request for giphy search
router.get("/", async (req, res) => {
  pool.query(`SELECT "favorites"."id", "favorites"."url", "favorites"."category_id", "category"."name" FROM "favorites"
  JOIN "category" ON "category"."id" = "favorites"."category_id" ORDER BY "favorites"."id" ASC;`)
      .then(result => {
          res.send(result.rows)
      }).catch(err => {
          console.log('error in favorite get query:', err);
          res.sendStatus(500);
      })
})

router.post('/', (req, res) => {
  const body = req.body
  let queryText = `INSERT INTO "favorites" ("url")
  VALUES ($1)`
  pool.query(queryText, [body.url])
      .then(result => {
          res.sendStatus(200);
      }).catch(err => {
          console.log('error in post favorite query:', err);
          res.sendStatus(500);
      })

});

// router.get("/", async (req, res) => {
//   try {
//     const searchTerm = req.query.params; // Extracting a search term from query parameters

//     // Validate the search term
//     if (!searchTerm || typeof searchTerm !== "string") {
//       return res.status(400).send({ error: "Invalid search term" });
//     }

//     // Construct the API request URL with the validated search term
//     const response = await axios.get(
//       `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchTerm}`
//     );
//     res.send(response.data);
    
//   } catch (err) {
//     console.log("error in GET API", err);
//     res.sendStatus(500);
//   }
// });

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  let categoryId = req.body.category_id;
  let favId = req.params.id;
  let queryText = `UPDATE "favorites" SET "category_id" = $1
  WHERE "id" = $2;`;
  pool.query(queryText, [categoryId, favId])
      .then(result => {
          res.sendStatus(201);
      }).catch(err => {
          console.log('error updating favorite:', err);
          res.sendStatus(200);
      })
});

// delete a favorite
router.delete('/:id', (req, res) => {
  const id = req.params
  let queryText = `DELETE FROM "favorites" WHERE "id"=$1;`;
  pool.query(queryText, [id])
  .then ( () => {
      res.sendStatus(200);
  })
  .catch ( err => {
      console.log('ERROR deleting in DB:', err);
      res.sendStatus(500)
  })
});

module.exports = router;
