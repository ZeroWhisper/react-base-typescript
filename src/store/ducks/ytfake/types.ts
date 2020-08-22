import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
// import { set, request } from './actions';

export enum Type {
  SET = 'SETTING',
  REQUEST = 'REQUEST',
}

export type Action = ActionType<typeof actions>;

export interface State {
  data?: any;
  show?: any;
  loading: boolean;
  failure: boolean;
}

// import { Action } from 'redux';

// // INTERFACE
// export interface Name {
//   REQUEST: string;
//   SUCCESS: string;
//   FAILURE: string;
//   SET: string;
//   ERASE?: string;
// }

// // STORE
// export interface YTFakeState {
//   readonly search?: string;
//   readonly loading: boolean;
//   readonly data?: any;
// }

// // PAYLOADS
// export interface SettingPayload {
//   key: string;
//   value: string;
// }

// // ACTIONS
// export interface SetAction extends Action {
//   payload: SettingPayload;
// }

// // Object
// export interface YTFakeActions {
//   set(payload: SettingPayload): SetAction;
// }
