import Info from 'pages/Info';
import Main from 'pages/Main';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/info" component={Info} />
  </Switch>
);

export default Routes;
