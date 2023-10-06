import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryListItem from "../CategoryListItem/CategoryListItem";
// import CategoryListItem from "../CategoryListItem/CategoryListItem";

function CategoryList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_CATEGORY" });
    dispatch({ type: "FETCH_SEARCH" });
  }, []);
  const search = useSelector((store) => store.searchReducer.searchReducer);
  const category = useSelector(
    (store) => store.categoryReducer.categoryReducer
  );
  console.log("category list", category);
  console.log("search list", search);

  return (
    <div>
      <h1>map and get me some images</h1>
      {category.map((item) => {
        // return <CategoryListItem key={item.id} item={item} />;
        return (
          <div>
            <img src={item.id.images.original.url} alt={item.title || item.id} />
            <p>{item.title}</p>
            <li>{item.name}</li>
          </div>
        );
      })}
    </div>
  );
}
/// make categoryItem component yet
export default CategoryList;
