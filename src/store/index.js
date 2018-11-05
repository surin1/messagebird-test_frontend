import { createStore, applyMiddleware } from 'redux';
import appReducer from '../reducers';
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux';
import history from '../services/history';

import navitagionSaga from '../sagas/navigation';

const sagaMiddleware = createSagaMiddleware()

const configureStore = (initialState) => {
  let store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware),
    routerMiddleware(history)
  );
  
  sagaMiddleware.run(navitagionSaga);

  return store;
}

export default configureStore;
