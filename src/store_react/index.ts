import { useReducer } from 'react';

interface StateReducer {
  counter: integer;
  clicks: integer;
}

interface DispatchAction<T> {
  type: string;
  payload: T;
}

const reducer = <T>(state: StateReducer, action: DispatchAction<T | any>) => {
  switch (action.type) {
    case 'plus':
      return state;
    default:
      return state;
  }
};

const initialValue = {
  counter: 0,
  clicks: 0,
};

function App() {
  const re = useReducer(reducer, initialValue);
}

export { reducer };

// const reducer = useReducer(reducer, ) {

// }

// export default function reducer() {

// }
