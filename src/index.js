import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from "redux-saga";
import _rootSaga from './redux/sagas/_root.saga';


const sagaMiddleware = createSagaMiddleware();


// function* watcherSaga() {
//   yield takeEvery("FETCH_CATEGORY", getCategorySaga);
//   yield takeEvery("ADD_CATEGORY", addCategorySaga);
//   yield takeEvery("FETCH_FAVORITE", getFavoriteSaga);
//   yield takeEvery("ADD_FAVORITE", addFavoriteSaga);
// }


const storeInstance = createStore(
    combineReducers({
        getCategorySaga, addCategorySaga, getFavoriteSaga, addFavoriteSaga
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(_rootSaga);

ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>, 
document.getElementById('root'));
