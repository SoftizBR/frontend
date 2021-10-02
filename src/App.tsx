import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes';
import GlobalStyle from 'styles/global';

const src: React.FC = () => {
  return (
		<BrowserRouter>
			<Routes />
			<GlobalStyle />
		</BrowserRouter>
  )
}

export default src;
