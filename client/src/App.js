import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Requester from './components/Requester.jsx';

const axios = require('axios');

const host = SERVICE_HOST;
const port = SERVICE_PORT;

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/listing/:id'>
          <Requester />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
