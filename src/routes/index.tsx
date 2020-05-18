import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import * as Redux from 'react-redux';
// import { View, Text } from 'react-native';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

// import styles from './style';

const Routes: React.FC = (props) => {
  return (
    <Switch>
      <Route path={'/'} exact>
        <Dashboard />
      </Route>
      <Route path={'/login'}>
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
