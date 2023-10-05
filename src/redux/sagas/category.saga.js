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



export default function* () {
  yield takeEvery("FETCH_CATEGORY", fetchCategorySaga);
  yield takeEvery("ADD_CATEGORY", addCategorySaga)
}
