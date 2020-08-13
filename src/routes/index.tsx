import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import * as Redux from 'react-redux';
// import { View, Text } from 'react-native';

import Dashboard from '~/pages/Dashboard';
import Rocketseat from '~/pages/Rocketseat';
// import Login from '~/pages/Login';
import LoginJWT from '~/pages/LoginJWT';
import StartGame from '~/pages/StartGame';
import Example from '~/pages/Example';
import ClickExample from '~/pages/ClickExample';

// import styles from './style';

const Routes: React.FC = (props) => {
  return (
    <Switch>
      <Route path={'/dashboard'} exact>
        <Dashboard />
      </Route>
      <Route path={'/'}>
        <Rocketseat />
      </Route>
      {/* <Route path={'/login'}>
        <Login />
      </Route> */}
      <Route path={'/login'}>
        <LoginJWT />
      </Route>
      <Route path={'/game'}>
        <StartGame />
      </Route>
      <Route path={'/example'}>
        <Example />
      </Route>
      <Route path={'/click'}>
        <ClickExample />
      </Route>
    </Switch>
  );
};

export default Routes;
