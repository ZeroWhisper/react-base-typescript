import { Reducer, Middleware, createStore, applyMiddleware } from 'redux';

import { YTActions, YTState } from './modules/yt/types';

export interface StoreApp {
  yt: YTState;
}

export type StoreAction = YTActions;

export default (
  reducers: Reducer<StoreApp, StoreAction>,
  middlewares: Middleware[],
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
