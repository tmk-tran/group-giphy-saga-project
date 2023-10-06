import React from "react";
// import { useDispatch } from "react-redux";

export default function CategoryListItem({CategoryItem}) {
    // const dispatch = useDispatch();
    
    return 
    (

        <li>
            <span>{CategoryItem.name}</span>
            <span>{CategoryItem.url}</span>
        </li>
    )
}
