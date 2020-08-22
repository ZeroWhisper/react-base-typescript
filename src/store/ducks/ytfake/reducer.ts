import { State, Action, Type } from './types';

const INITIAL: State = {
  data: null,
  show: null,
  loading: false,
  failure: false,
};

const reducer = (state = INITIAL, action: Action): State => {
  switch (action.type) {
    case Type.SET:
      // action.payload.
      return state;
    case Type.REQUEST:
      // action.payload.name;
      return state;
    default:
      return state;
  }
};

export default reducer;
