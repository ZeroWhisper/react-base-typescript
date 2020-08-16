import React from 'react';
//import * as Redux from 'react-redux';

import { Content } from './style';

const Search: React.FC = (props) => {
  return (
    <Content>
      <div>
        <span>X</span>
        <input type="text" placeholder="Digite algo" />
      </div>
      <button type="submit">Enviar</button>
    </Content>
  );
};

export default Search;
