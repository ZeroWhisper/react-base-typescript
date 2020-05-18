// import { Action, ActionCreator } from 'redux';
import { LoginTypes } from './types';

// export const Creators = (payload?): ActionCreator => ({

// })

export default {
  loginRequest: (payload: Object | null) => ({
    type: LoginTypes.REQUEST,
    payload,
  }),

  loginSuccess: (payload: Object | null) => ({
    type: LoginTypes.SUCCESS,
    payload,
  }),

  loginFailure: (payload: Object | null) => ({
    type: LoginTypes.FAILURE,
    payload,
  }),
};
