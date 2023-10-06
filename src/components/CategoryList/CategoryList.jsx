import { useSelector } from "react-redux";
import CategoryListItem from "../CategoryListItem/CategoryListItem";
import { Button } from "@mui/material";

import { useHistory } from "react-router-dom";

function CategoryList() {
  const search = useSelector((store) => store.searchReducer.searchReducer);

  const history = useHistory();

  console.log(search);

  return (
    <div>
      <Button variant="contained" onClick={() => history.push("/")}>Back</Button>

      {search.map((searchItem) => {
        return <CategoryListItem key={searchItem.id} searchItem={searchItem} />;
      })}
    </div>
  );
}
export default CategoryList;
