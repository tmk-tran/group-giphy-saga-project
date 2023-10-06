import { combineReducers } from "redux";

//import our reducer here
import categoryReducer from "./category.reducer";
import favoritesReducer from "./category.reducer";
import searchReducer from "./category.reducer";

export default combineReducers({
  categoryReducer, favoritesReducer, searchReducer

});
