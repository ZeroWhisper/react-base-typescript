import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const store = createStore(rootReducer, []);

createSagaMiddleware;

export { store };
