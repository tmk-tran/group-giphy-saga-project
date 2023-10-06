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

            <img src={favorite.image_url} alt={favorite.title} />
            <p>{favorite.title}</p>
            
        </div>

   
  );
}
