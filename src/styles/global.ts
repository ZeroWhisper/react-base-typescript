import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #eaeaea;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
    font-family: Roboto, Helvetica, sans-serif
  }

  button {
    cursor: pointer;
  }

  /* body * {
    display: flex;
  } */

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

`;
