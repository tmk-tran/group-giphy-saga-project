import React from "react";
import { useDispatch } from "react-redux";

function CategoryItem({categoryItem}) {
    const dispatch = useDispatch();
    
    return 
    (

        <li>
            <span>{categoryItem.name}</span>
            <span>{categoryItem.url}</span>
        </li>
    )
}
export default CategoryItem;