import { combineReducers } from "redux";

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({ categoryReducer });
