import React from 'react';
import Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
// import * as Redux from 'react-redux';
// import { View, Text } from 'react-native';
import AppContainer from '~/components/AppContainer';

// import Body from './components/Body';

// import { Content } from './style';

const Dashboard: React.FC = (props) => {
  return (
    <AppContainer>
      <DndProvider backend={Backend}>{/* <Body /> */}</DndProvider>
    </AppContainer>
  );
};

export default Dashboard;
