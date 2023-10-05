const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM category ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// router.get("/", async (req, res) => {
//   try {
//     const searchTerm = req.query.q; // Extracting a search term from query parameters

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

module.exports = router;