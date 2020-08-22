import { put, call, select } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import * as a from './actions';

import api_google from '~/services/api_google';
import { AppState } from './../../createStore';

// import * as Redux from 'redux';
// import LoginActions, { ActionsTypes } from './actions';

// import api from '~/services/api';

// const type = ActionType<typeof a.request>;
// export type Action = ActionType<typeof a.>;

export function* _request(action?: ActionType<typeof a>) {
  try {
    // yield put({ type: 'teste' });
    const { busca } = yield select((state: AppState) => state.ytfake.form);
    // payload

    const { data } = yield call(api_google.get, '/search', {
      params: {
        q: busca,
      },
    });

    // action?.payload
    // console.log(payload.payload)
    // const response = yield call(api.get, 'users/ZeroWhisper/repos');
    // console.log(response);
    // yield put();
  } catch (e) {
    // yield put(LoginActions.loginSuccess(e.message));
    console.log(e.message);
  }
}
