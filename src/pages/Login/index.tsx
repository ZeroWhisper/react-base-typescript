import React, { FormEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ApplicationState } from '~/store';
import LoginActions from '~/store/ducks/login/actions';
import AppContainer from '~/components/AppContainer';

const Login: React.FC<Props> = (props) => {
  async function handleInput(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    console.log('EDITANDO');
    props.loginRequest();
  }

  return (
    <AppContainer>
      Login
      <form onSubmit={handleInput}>
        <button>ENVIAR</button>
      </form>
    </AppContainer>
  );
};

interface StateProps {}

interface DispatchProps {
  loginRequest(): void;
}

interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

const mapStateToProps = (state: ApplicationState) => ({
  login: state.login.data,
  loading: state.login.loading,
});

// const mapDispatchToProps = (dispatch: Dispatch) =>
// bindActionCreators({}, dispatch);
const mapDispatchToProps = (dispatch: Dispatch) => ({
  loginRequest: () => dispatch(LoginActions.loginRequest(null)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
