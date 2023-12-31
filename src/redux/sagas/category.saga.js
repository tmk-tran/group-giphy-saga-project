import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* fetchCategorySaga() {
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/category",
    });
    yield put({ type: "SET_CATEGORY", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function* addCategorySaga() {
  try {
    yield axios({
      method: "POST",
      url: "/api/category" ,  
      data: { name: action.payload.newInput}
    })
  } catch (error) {
    console.log('Error in addCategorySaga', error);
  }
}


function* fetchFavoriteSaga(){
  try {
      const response = yield axios({
        method: "GET",
        url: "/api/favorite",
      });
      yield put({ type: "SET_FAVORITE", payload: response.data });
    } catch (error) {
      console.log("error with GET request", error);
    }
}

function* addFavoriteSaga(action) {
  try {
    console.log(action.payload);
    yield axios({
      method: "POST",
      url: "/api/favorite",
      data: action.payload
    });

    yield put({ type: "FETCH_FAVORITES" });
  } catch (error) {
    console.log(error);
    alert("Unable to add category");
  }
}

function* fetchSearchResults(action){
  try {
      const response = yield axios({
        method: "POST",
        url: `/api/search/${action.payload}`,
      });
      yield put({ type: "SET_SEARCH", payload: response.data });
    } catch (error) {
      console.log("error with SEARCH GET request", error);
    }
}

function* deleteFavorite(action) {
  //console.log('ACTION',action.payload);
  try {
    yield axios({
      method: "DELETE",
      url: `/api/favorite/${action.payload}`});
    yield put({ type: "FETCH_FAVORITES" });
  } catch (error) {
    console.log("error with DELETE request", error);
  }
}
function* updateItemSaga(action) {
  try {
    yield axios({
      method: "PUT",
      url: `/api/favorite/${action.payload.id}`,
      data: {categoryId: action.payload.category_id}
    });
    yield put({ type: "FETCH_FAVORITES" });
  } catch (error) {
    console.log("error with UPDATE request", error);
  }
}
// {category_id: action.payload.category_id}} maybe need this in url?
    

export default function* () {
  yield takeEvery("FETCH_CATEGORY", fetchCategorySaga);
  yield takeEvery("ADD_CATEGORY", addCategorySaga);
  yield takeEvery("FETCH_FAVORITES", fetchFavoriteSaga);
  yield takeEvery("ADD_FAVORITE", addFavoriteSaga);
  yield takeEvery("FETCH_SEARCH", fetchSearchResults);
  yield takeEvery("DELETE_FAVORITE", deleteFavorite);
  yield takeEvery("UPDATE_FAVORITE", updateItemSaga);
}