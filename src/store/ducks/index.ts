import { combineReducers } from 'redux';
import { all, takeLatest } from 'redux-saga/effects';

import login from './login';

import { LoginTypes } from './login/types';
import { request } from './login/sagas';

export default combineReducers({
  login,
});

export function* rootSaga() {
  const list = [];

  list.push(takeLatest(LoginTypes.REQUEST, request));

  return yield all(list);
}
