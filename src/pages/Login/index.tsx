import React from 'react';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLoginProps,
} from 'react-google-login';
//import * as Redux from 'react-redux';

import AppContainer from '~/components/AppContainer';

import { Content, BoxLogin } from './style';

const x_google =
  '297300340076-4cbqnre0to4nihg4p5emqivbtcmsml4t.apps.googleusercontent.com';
const x_google_cli = '8KJEqAS-9tjyAkD1pSey8lle';

// interface GoogleResponse {
//   acessToken: string;
// }

// type GoogleResponse = GoogleLoginResponse | GoogleLoginResponseOffline;

const Login: React.FC = (props) => {
  const url = 'https://www.googleapis.com/youtube/v3';
  const [user, setUser] = React.useState<GoogleLoginResponse>(null);
  const [o, setObj] = React.useState({});

  React.useEffect(() => {
    const f = async ({ accessToken }: GoogleLoginResponse) => {
      const result = await fetch(url + '/activities', {
        method: 'GET',
        headers: {
          Autorization: 'Bearer ' + accessToken,
        },
      });
      return result.json();
    };

    if (user) {
      const r = f(user);
      console.log(r);
    }

    console.log('TENHO', o);
  }, [user, o]);

  return (
    <AppContainer>
      <Content>
        <BoxLogin>
          <span>Olá Mundo!</span>
          <GoogleLogin
            clientId={x_google}
            // onSuccess={() => {}}
            // onFailure={() => {}}
            onSuccess={setObj}
            onFailure={console.log}
            cookiePolicy={'single_host_origin'}
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
