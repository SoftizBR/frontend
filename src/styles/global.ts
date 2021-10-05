import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  :root {
    font-size: 40%;
    @media (min-width: 768px) {
      font-size: 50%;
    }
    @media (min-width: 1500px) {
      font-size: 62.5%;
    }
  }
  body {
    background-color: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px 'Inter', sans-serif;
  }
  #root {
    margin: 0 auto;
    padding: 40px 150px;

		@media (max-width: 1300px) {
      padding: 20px 20px;
    }
  }
  button {
    cursor: pointer;
  }
`;
