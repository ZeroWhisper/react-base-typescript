import React from 'react';

import { Content } from './style';

const AppContainer: React.FC = (props) => {
  return <Content>{props.children}</Content>;
};

export default AppContainer;
