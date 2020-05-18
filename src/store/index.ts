import { compose, createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { LoginState } from './ducks/login/types';

import reducers, { rootSaga } from './ducks';

export interface ApplicationState {
  login: LoginState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  reducers,
  {},
  compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
