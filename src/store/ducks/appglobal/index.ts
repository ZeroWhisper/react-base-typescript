import { Reducer } from 'redux';

import { ActionsTypes } from './actions';

interface AppState {
  name: string;
}

const INITIAL: AppState = {
  name: 'Meu App',
};

const reducer: Reducer<AppState> = (
  state = INITIAL,
  action: ActionsTypes<null>,
) => {
  switch (action.type) {
    case '':
      return state;
    default:
      return state;
  }
};

export default reducer;
