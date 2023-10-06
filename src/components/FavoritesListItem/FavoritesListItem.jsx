import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";

export default function FavoritesListItem({ favorite }) {
  const dispatch = useDispatch();
  // const history = useHistory();

  const [selectedCategory, setSelectedCategory] = useState(
    favorite.category_id
  );

  const category = useSelector(
    (store) => store.categoryReducer.categoryReducer
  );

  return (
    <Card key={favorite.id} style={{ width: "50%", margin: "15px auto" }}>
      <CardContent>
        <img
          style={{ width: "100%", height: "auto" }}
          src={favorite.url}
          alt={`GIF titled: ${favorite.name || favorite.id}`}
        />
        <Typography variant="h5">Title: {favorite.name}</Typography>
        <br />
        <Typography variant="h5">ID: {favorite.id}</Typography>
        <br />
        <label htmlFor="#favSelect" style={{ fontSize: "20px" }}>
          Select a Category:
        </label>
        <select
          id="favSelect"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          {category.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </option>
          ))}
        </select>
        <br />
        <br />
        <Button
          variant="contained"
          style={{ marginRight: "15px", backgroundColor: "red" }}
          onClick={() => {
            dispatch({ type: "DELETE_FAVORITE", payload: favorite.id }),
              alert("Deleted!");
          }}
        >
          Delete
        </Button>
        <Button
          onClick={() =>
            dispatch({
              type: "UPDATE_FAVORITE",
              payload: { category_id: selectedCategory, id: favorite.id },
            })
          }
          variant="contained"
        >
          Update
        </Button>

        <br />
      </CardContent>
    </Card>
  );
}
