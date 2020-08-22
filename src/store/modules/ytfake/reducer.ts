import { State, Action, Type } from './types';

const INITIAL: State = {
  loading: false,
  failure: false,
};

const reducer = (state = INITIAL, action: Action): State => {
  switch (action.type) {
    case Type.SET:
      const { key, value } = action.payload;
      return { ...state, form: { ...state.form, [key]: value } };
    case Type.REQUEST:
      // action.payload.name;
      return state;
    default:
      return state;
  }
};

export default reducer;
