const Types = (name: string): Object => ({
  REQUEST: `${name}/REQUEST`,
  SUCCESS: `${name}/SUCCESS`,
  FAILURE: `${name}/FAILURE`,
});

export default Types;

export enum LoginTypes {
  REQUEST = 'request',
  SUCCESS = 'success',
  FAILURE = 'failure',
}

export interface Login {
  id: number;
  name: string;
}

export interface FormData {
  nome: string;
  pass: string;
}

export interface LoginState {
  readonly data: Login | null;
  readonly form: FormData | null;
  readonly loading: boolean;
  readonly error: string | null;
}
