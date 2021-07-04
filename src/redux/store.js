import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers/index.js'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './sagas/index.js'

const sagaMiddleware = createSagaMiddleware()

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools),
)

sagaMiddleware.run(rootSaga)

export default store

