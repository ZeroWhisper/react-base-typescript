import { Reducer, Middleware, createStore, applyMiddleware } from 'redux';

import {
  Action as YTFakeActions,
  State as YTFakeStore,
} from './modules/ytfake/types';

export interface AppState {
  ytfake: YTFakeStore;
}

export type StoreAction = YTFakeActions;

export default (
  reducers: Reducer<AppState, StoreAction>,
  middlewares: Middleware[],
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
