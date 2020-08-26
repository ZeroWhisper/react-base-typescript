import React from 'react';

import GeekCard from '~/components/Organisms/GeekCard';

import { Container } from './style';

const TaskColumn: React.FC = (props) => {
  return (
    <Container>
      {Array.from({ length: 5 }).map((e, i) => {
        return <GeekCard key={String(i)} data={e} />;
      })}
    </Container>
  );
};

export default TaskColumn;
