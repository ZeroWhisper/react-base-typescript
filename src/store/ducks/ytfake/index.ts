import { generateTypes, DefaultTypes } from '../types';

const Types = generateTypes('YTFake');

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
