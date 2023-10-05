import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { takeEvery, put } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";


const sagaMiddleware = createSagaMiddleware();


function* watcherSaga() {
  yield takeEvery("FETCH_CATEGORY", getCategorySaga);
  yield takeEvery("ADD_CATEGORY", addCategorySaga);
  yield takeEvery("FETCH_FAVORITE", getFavoriteSaga);
  yield takeEvery("ADD_FAVORITE", addFavoriteSaga);
}

function* getCategorySaga(){
    try {
        const response = yield axios({
          method: "GET",
          url: "/api/category",
        });
        yield put({ type: "SET_CATEGORY", payload: response.data });
      } catch (error) {
        console.log("error with GET request", error);
      }
}

function* addCategorySaga(action) {
    try {
      yield axios({
        method: "POST",
        url: "/api/category",
        data: { name: action.payload.name },
      });
  
      yield put({ type: "FETCH_CATEGORY" });
    } catch (error) {
      console.log(error);
      alert("Unable to add category");
    }
  }

  function* getFavoriteSaga(){
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

const storeInstance = createStore(
    combineReducers({
        getCategorySaga, addCategorySaga, getFavoriteSaga, addFavoriteSaga
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>, 
document.getElementById('root'));
