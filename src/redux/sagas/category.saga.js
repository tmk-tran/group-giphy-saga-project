import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* fetchCategorySaga() {
  try {
    const response = yield axios({
      method: "GET",
      url: "/",
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
      url: "/" ,    ///what url????
      data: { url: action.payload}, //what payload????
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
    yield axios({
      method: "POST",
      url: "/api/favorite",
      data: { name: action.payload.name },
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
        method: "GET",
        url: `/api/search?term=${action.payload}`,
      });
      yield put({ type: "SET_SEARCH", payload: response });
    } catch (error) {
      console.log("error with SEARCH GET request", error);
    }
}

function* deleteFavorite(action) {
  try {
    yield axios.delete(`/api/favorite/${action.payload}`);
    yield put({ type: "FETCH_FAVORITES" });
  } catch (error) {
    console.log("error with DELETE request", error);
  }
}




export default function* () {
  yield takeEvery("FETCH_CATEGORY", fetchCategorySaga);
  yield takeEvery("ADD_CATEGORY", addCategorySaga)
}
