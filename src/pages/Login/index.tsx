import React from 'react';
import GoogleLogin from 'react-google-login';
//import * as Redux from 'react-redux';

import AppContainer from '~/components/AppContainer';

import { Content, BoxLogin } from './style';

const Login: React.FC = (props) => {
  return (
    <AppContainer>
      <Content>
        <BoxLogin>
          <span>Olá Mundo!</span>
          <GoogleLogin
            clientId="273741619457-i5h186mmqc4dqnn4n60ulneavi5rg7vs.apps.googleusercontent.com"
            onSuccess={() => {}}
            onFailure={() => {}}
          />
        </BoxLogin>
      </Content>
    </AppContainer>
  );
};

export default Login;
// import React, { FormEvent } from 'react';
// import GoogleLogin from 'react-google-login';
// import { connect } from 'react-redux';
// import { Dispatch } from 'redux';

// import { ApplicationState } from '~/store';
// import LoginActions from '~/store/ducks/login/actions';
// import AppContainer from '~/components/AppContainer';

// const Login: React.FC<Props> = (props) => {
//   async function handleInput(e: FormEvent<HTMLFormElement>): Promise<void> {
//     e.preventDefault();

//     console.log('EDITANDO');
//     props.loginRequest();
//   }

//   return (
//     <AppContainer>
//       <div>Login</div>
//       <form onSubmit={handleInput}>
//         <GoogleLogin
//           clientId="273741619457-i5h186mmqc4dqnn4n60ulneavi5rg7vs.apps.googleusercontent.com"
//           onSuccess={() => {}}
//           onFailure={() => {}}
//         />
//       </form>
//     </AppContainer>
//   );
// };

// interface StateProps {}

// interface DispatchProps {
//   loginRequest(): void;
// }

// interface OwnProps {}

// type Props = StateProps & DispatchProps & OwnProps;

// const mapStateToProps = (state: ApplicationState) => ({
//   login: state.login.data,
//   loading: state.login.loading,
// });

// // const mapDispatchToProps = (dispatch: Dispatch) =>
// // bindActionCreators({}, dispatch);
// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   loginRequest: () => dispatch(LoginActions.loginRequest(null)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
