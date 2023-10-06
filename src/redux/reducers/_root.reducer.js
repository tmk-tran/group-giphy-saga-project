import { combineReducers } from "redux";

//import our reducer here
import category from "./category.reducer";
import favorites from "./category.reducer";
import search from "./category.reducer";

export default combineReducers({
  category, favorites, search

});
