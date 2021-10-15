import Info from 'pages/Info';
import Main from 'pages/Main';
import Portifolio from 'pages/Portifolio';
import React from 'react';
import { Route, Switch } from 'react-router-dom';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/info" component={Info} />
		<Route path="/portifolio" component={Portifolio} />
  </Switch>
);

export default Routes;
