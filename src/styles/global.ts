import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px Inter, sans-serif;
  }
  #root {
     margin: 0 auto;
     padding: 40px 80px;
  }
  button {
    cursor: pointer;
  }
`;
