import { Typography, CardContent, Card } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";


export default function CategoryListItem({searchItem}) {
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState(0);

    const category = useSelector(
        (store) => store.categoryReducer.categoryReducer
      );
    
    return (
        <Card style={{ width: "30%", margin: "0 auto", minWidth: "200px" }}>
          <CardContent>
            <img
            style={{ width: "100%", height: "auto"}}
              src={searchItem.images.original.url}
              alt={searchItem.title || searchItem.id}
            />
            <Typography variant="h5">Title: {searchItem.title}</Typography>
            <br />
            {/* <Typography variant="h5">ID: {searxxchItem.id}</Typography> */}
            <label htmlFor="#favSelect">Select a Category:</label>
            <select  id="favSelect" onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
                <option value={0}>Select a Category</option>
              {category.map((category) => <option key={category.id} value={category.id}>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</option>)}
            </select>
            <br />
            <button
              onClick={() =>
                dispatch({
                  type: "ADD_FAVORITE",
                  payload: {url: searchItem.images.original.url, categoryId: selectedCategory},
                })
              }
            >
              favorite
            </button>
            <br />
          </CardContent>
        </Card>
      )
}
