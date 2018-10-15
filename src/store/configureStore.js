import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import {
  routerMiddleware,
  routerReducer,
} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './sagas';

const enhancers = [];

if (process.env.REACT_APP_DEBUG) {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(history) {
  const createStoreWithEnhancers = compose(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history),
    ),
    ...enhancers,
  )(createStore);

  const rootReducer = combineReducers({
    ...reducers,
    router: routerReducer,
  });

  const sotre = createStoreWithEnhancers(rootReducer);

  sagaMiddleware.run(rootSaga);

  return sotre;
}
