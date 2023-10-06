import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import FavoritesListItem from "../FavoritesListItem/FavoritesListItem";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function FavoritesList() {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state) => state.favoritesReducer.favoritesReducer
  );
  const categories = useSelector(
    (state) => state.categoryReducer.categoryReducer
  );
  console.log("logging favorites in favorites list: ", favorites);
  console.log("logging categories in favorites list: ", categories);
  useEffect(() => {
    dispatch({ type: "FETCH_FAVORITES" });
  }, []);

  // const handleUpdate = () => {
  // dispatch({ type: ""})
  // }

  return (
    <div>
      <h1>Favorites Page</h1>

      <div>
        {favorites.map((favorite) => {
          console.log(favorite);
          return (
            <Card key={favorite.id} style={{ width: "50%", margin: "0 auto" }}>
              <CardContent>
                <img
                   style={{ width: "100%", height: "auto"}}
                  src={favorite.url}
                  alt={`GIF titled: ${favorite.name || favorite.id}`}
                />
                <Typography variant="h5">Title: {favorite.name}</Typography>
                <br />
                <Typography variant="h5">ID: {favorite.id}</Typography>
                <br />
               
                <Button
                  variant="contained"
                  style={{marginRight: "15px", backgroundColor: "red"}}
                  onClick={() =>
                    dispatch({ type: "DELETE_FAVORITE", payload: favorite.id })
                  }
                >
                  Delete
                </Button>
                <Button variant="contained">Update</Button>

                <br />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
