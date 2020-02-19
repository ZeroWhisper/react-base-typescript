import * as styledComponents from 'styled-components';

export const GlobalStyle = styledComponents.createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.secondary};
  }
`;
