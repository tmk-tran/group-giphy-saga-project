import React from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";

export default function FavoritesListItem({ favorite }) {
  // const dispatch = useDispatch();
  // const history = useHistory();
console.log('logging list item', listItem);
console.log(favorite)
  return (
    <div>

         
            <p>{favorite.title}</p>
            <img src={favorite.images.original.url} alt={favorite.title || favorite.id} />
        </div>

   
  );
}
