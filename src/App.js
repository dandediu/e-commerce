import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/home';
import Shop from 'pages/shop';
import Header from 'components/header';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
