import { Reducer } from 'redux';

import { LoginState } from './types';

const INITIAL: LoginState = {
  data: null,
  form: null,
  loading: false,
  error: null,
};

const reducer: Reducer<LoginState> = (state = INITIAL, action) => {
  switch (action.type) {
    case '':
      return state;
    default:
      return state;
  }
};

export default reducer;
