// import { Action } from 'redux';

export interface DefaultTypes {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
  SET: string;
  ERASE?: string;
}

export const generateTypes = (name: string): DefaultTypes => ({
  REQUEST: `${name}/REQUEST`,
  SUCCESS: `${name}/SUCCESS`,
  FAILURE: `${name}/FAILURE`,
  SET: `${name}/SETTING`,
});

export const APP_TYPES = generateTypes('APP_TYPES');
