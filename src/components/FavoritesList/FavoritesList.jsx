
import { useSelector, useDispatch } from "react-redux";
import FavoritesListItem from "../FavoritesListItem/FavoritesListItem";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


export default function FavoritesList() {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state) => state.favoritesReducer.favoritesReducer
  );

  console.log("logging favorites in favorites list: ", favorites);
  console.log("logging categories in favorites list: ", category);
  useEffect(() => {
    dispatch({ type: "FETCH_FAVORITES" });
  }, []);
  const category = useSelector(
    (store) => store.categoryReducer.categoryReducer
  );

 
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Favorites Page</h1>

      <div>
        {favorites.map((favorite) => 
        <FavoritesListItem key={favorite.id} favorite={favorite}/>)}
      </div>
    </div>
  );
}
