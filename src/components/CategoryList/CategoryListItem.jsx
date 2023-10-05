import React from "react";
import { useDispatch } from "react-redux";

function CategoryItem(props) {
    const dispatch = useDispatch();

    return (
        <li>
            <span>{props.CategoryItem.url}</span>
        </li>
    )
}
export default CategoryItem;