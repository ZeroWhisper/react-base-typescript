import { Action } from 'redux';
import { APP_TYPES } from '../types';

export interface ActionsTypes<T> {
  type: string;
  payload?: T | any;
}

export default {
  loginRequest: <T>(payload: T | null): ActionsTypes<T> => ({
    type: APP_TYPES.REQUEST,
    payload,
  }),

  loginSuccess: <T>(payload: T | null): ActionsTypes<T> => ({
    type: APP_TYPES.REQUEST,
    payload,
  }),

  loginFailure: <T>(payload: T | null): ActionsTypes<T> => ({
    type: APP_TYPES.REQUEST,
    payload,
  }),
};
