import { combineReducers } from 'redux';
import { all, takeLatest } from 'redux-saga/effects';

import login from './login';
// import ytfake, { Types as YTFakeTypes } from './ytfake';
import ytfake from './ytfake/reducer';

import { LoginTypes } from './login/types';
// import { LoginTypes } from './ytfake/types';
import * as LoginSaga from './login/sagas';
// import * as YTFakeSaga from './ytfake/sagas';

export default combineReducers({
  login,
  ytfake,
});

export function* rootSaga() {
  const list = [];

  list.push(takeLatest(LoginTypes.REQUEST, LoginSaga.request));
  // list.push(takeLatest(YTFakeTypes.SET, YTFakeSaga.));

  return yield all(list);
}
