const express = require('express');
const pool = require('../modules/pool');
const axios = require("axios");
const router = express.Router();

//get api request for giphy search
router.get("/", async (req, res) => {
  pool.query(`SELECT "favorites"."id", "favorites"."url", "favorites"."category_id", "category"."name" FROM "favorites"
  JOIN "category" ON "category"."id" = "favorites"."category_id" ORDER BY "favorites"."id" DESC;`)
      .then(result => {
          res.send(result.rows)
      }).catch(err => {
          console.log('error in favorite get query:', err);
          res.sendStatus(500);
      })
})

router.post('/', (req, res) => {
  const favorite = req.body
  let queryText = `INSERT INTO "favorites" ("url", "category_id")
  VALUES ($1, $2);`;

  console.log(req.body)
  pool.query(queryText, [favorite.url, favorite.categoryId])
      .then(result => {
          res.sendStatus(200);
      }).catch(err => {
          console.log('error in post favorite query:', err);
          res.sendStatus(500);
      })

});


// update given favorite with a category id
router.put('/:favoriteId', (req, res) => {
  let favoriteId = req.params.favoriteId;
  let categoryId = req.body.categoryId;
  let queryText = `UPDATE "favorites" SET "category_id" = $1
  WHERE "id" = $2;`;
  pool.query(queryText, [categoryId , favoriteId])
      .then(result => {
          res.sendStatus(201);
      }).catch(err => {
          console.log('error updating favorite:', err);
          res.sendStatus(500);
      })
});

// delete a favorite
router.delete('/:id', (req, res) => {
  let queryText = `DELETE FROM "favorites" WHERE "id"=$1;`;
  pool.query(queryText, [req.params.id])
  .then ( () => {
      res.sendStatus(200);
  })
  .catch ( err => {
      console.log('ERROR deleting in DB:', err);
      res.sendStatus(500)
  })
});

module.exports = router;
