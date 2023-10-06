const express = require('express');
const pool = require('../modules/pool');
const axios = require("axios");
const router = express.Router();

router.get("/", (req, res) => {
  res.send
})

router.post("/:query", async (req, res) => {
    const searchString = req.params.query;
    console.log(searchString);
    try {
      const response = await axios.get(
        `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchString}`
      );
      console.log(response)
     res.send(response.data.data)
    } catch (err) {
      console.log("error in GET API", err);
      res.sendStatus(500);
    }
  })


  
module.exports = router