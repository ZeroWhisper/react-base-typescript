import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    /* max-width: 960px; */
    /* margin: 0 auto; */
    /* padding: 40px 20px; */
  }

  body, input, button {
    font-size: 16px;
    font-family: Roboto, Helvetica, sans-serif
  }

  body {
    /* background-color: #eaeaea; */
    /* background-color: #39ff14; */
    /* background-color: #69ff46; */
    /* background-color: #AA00FF; */
    /* background-color: #ff00ff; */
    /* background-color: #F8397E; */
    background-color: #ffa340;
    /* background-color: #fb4a21; */
    /* background-color: #fcf133; */
    /* background-color: #ff3a40; */
    -webkit-font-smoothing: antialiased;
    /* display: flex; */
    /* flex: 1; */
    width: 100%;
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  /* body * {
    display: flex;
  } */



`;
