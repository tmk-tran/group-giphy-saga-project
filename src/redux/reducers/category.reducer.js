import { combineReducers } from "redux";

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};

const favoritesReducer = (state = [], action ) => {
  switch (action.type) {
    case "SET_FAVORITES":
      return action.payload
    default:
    return state
  }
}

const searchReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_SEARCH":
    return action.payload
    default:
      return state
  }
}

export default combineReducers({ categoryReducer, favoritesReducer, searchReducer });
