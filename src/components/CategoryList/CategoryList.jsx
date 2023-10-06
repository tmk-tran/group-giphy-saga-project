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
  // const search = useSelector((store) => store.searchReducer.searchReducer);
  const category = useSelector(
    (store) => store.categoryReducer.categoryReducer
  );
  console.log("category list", category);
  //   console.log("search list", search);

  return (
    <div>
      
        {/* {category.map((categoryItem) => (
          <li key={categoryItem.id}>
            retu
                {categoryItem}
            {/* <CategoryListItem categoryItem={categoryItem} /> */}
            
          {/* </li>
        ))} */} 
    </div>
  );
}
/// make categoryItem component yet
export default CategoryList;
