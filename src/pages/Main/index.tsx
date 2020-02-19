import React from 'react';

interface Props {
  id?: Number;
}

const Main = (props: Props) => {
  return <div>JAO É FODA BAGARAI{props.id}</div>;
};

export default Main;
