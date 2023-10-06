import { Typography, CardContent, Card, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Button } from "@mui/material"


export default function CategoryListItem({searchItem}) {
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState(0);

    const category = useSelector(
        (store) => store.categoryReducer.categoryReducer
      );
    
    return (
        // <Grid container spacing={6}>
        <Card style={{ width: "50%", margin: "15px auto", minWidth: "200px"}}>
          <CardContent>
            <img
            style={{ width: "100%", height: "auto"}}
              src={searchItem.images.original.url}
              alt={searchItem.title || searchItem.id}
            />
            <Typography variant="h5">Title: {searchItem.title}</Typography>
            <br />
            <label htmlFor="#favSelect" style={{fontSize: "20px"}}>Select: </label>
            <select  id="favSelect" onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
                <option value={0}></option>
              {category.map((category) => <option key={category.id} value={category.id}>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</option>)}
            </select>
            <br />
            <br />
            <Button
              variant="contained"  
              onClick={() =>
                dispatch({
                  type: "ADD_FAVORITE",
                  payload: {url: searchItem.images.original.url, categoryId: selectedCategory},
                })
              }
            >
              favorite
            </Button>
            <br />
          </CardContent>
        </Card>
      )
}
