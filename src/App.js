import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/home';

import './App.css';

const Hats = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/hats">
          <Hats />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
