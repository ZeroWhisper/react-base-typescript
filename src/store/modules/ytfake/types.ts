import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export enum Type {
  SET = 'SETTING',
  REQUEST = 'REQUEST',
}

export type Action = ActionType<typeof actions>;

export interface State {
  data?: any; // Return of backend
  show?: any; // Data normalized to show
  form?: any; // Just to form
  loading: boolean;
  failure: boolean;
}
