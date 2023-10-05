import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import logger from 'redux-logger';



const storeInstance = createStore(
    combineReducers({
    }),
    applyMiddleware(logger),
);

ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>, 
document.getElementById('root'));
