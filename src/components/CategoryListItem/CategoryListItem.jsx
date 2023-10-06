import React from "react";
// import { useDispatch } from "react-redux";

export default function CategoryListItem({item}) {
    // const dispatch = useDispatch();
    
    return 
    (

        // <li>
        //     <span>{item.name}</span>
        //     <span>{item.url}</span>
        // </li>
         <div>
            <img src={item.url} alt={item.title || item.id} />
            <p>{item.title}</p>
        </div> 
    )
}
