import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import default_ from 'styles/themes/dark';

const src: React.FC = () => {
  return (
		<BrowserRouter>
			<ThemeProvider theme={default_}>
				<Routes />
				<GlobalStyle />
			</ThemeProvider>
		</BrowserRouter>
  )
}

export default src;
