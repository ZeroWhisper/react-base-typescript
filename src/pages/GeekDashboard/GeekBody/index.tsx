import React from 'react';
// import * as Redux from 'react-redux';
import TaskColumn from './TaskColumn';

import { Container } from './style';

const Body: React.FC = (props) => {
  return (
    <Container>
      <TaskColumn />
    </Container>
  );
};

export default Body;
