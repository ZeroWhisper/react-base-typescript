import { action } from 'typesafe-actions';
import { Type } from './types';

interface iSet {
  key: string;
  value: string;
}

interface iRequest {
  name?: string;
}

export const ActionsYTFake = {
  set: function (payload: iSet) {
    return action(Type.SET, payload);
  },

  request: function (payload?: iRequest) {
    return action(Type.REQUEST, payload);
  },
};

export function set(payload: iSet) {
  return action(Type.SET, payload);
}

export function request(payload?: iRequest) {
  return action(Type.REQUEST, payload);
}
