import { useSelector } from "react-redux";
import CategoryListItem from "../CategoryListItem/CategoryListItem"

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function CategoryList() {
  const search = useSelector((store) => store.searchReducer.searchReducer)

  console.log(search)


  return (
    <div>

      {search.map((searchItem) => {

        return (
          <CategoryListItem key={searchItem.id} searchItem={searchItem} />
        );
      })}
    </div>
  );
  /// make categoryItem component yet
}
export default CategoryList;
