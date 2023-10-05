import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem.jsx"
import { useDispatch, useSelector } from "react-redux";

function CategoryList() {
    const dispatch = useDispatch();

    const categoryReducer = useSelector((store) => store.categoryReducer.categoryReducer);

    useEffect(() => {
        dispatch({ type: "FETCH_CATEGORY" });
    }, []); 
}

return (
    <ul>

            {categoryReducer.map((categoryItem) => {
                return <CategoryItem key={categoryItem.id} categoryItem={categoryItem} />
            })}
    
    </ul>
)

/// make categoryItem component yet
export default CategoryList