import { call, put } from 'redux-saga/effects';
// import * as Redux from 'redux';
import LoginActions from './actions';

import api from '~/services/api';

export function* request(payload: Object) {
  try {
    const response = yield call(api.get, 'users/ZeroWhisper/repos');

    console.log(response);

    yield put(LoginActions.loginSuccess(response.data));
  } catch (e) {
    yield put(LoginActions.loginSuccess(e.message));
    console.log(e.message);
  }
}