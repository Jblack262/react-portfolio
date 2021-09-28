import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { Home, Error, } from './pages/index';

import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
        <Switch>
            <Route path="/" exact component={() => <Home />} />


            <Route exact component={() => <Error />} />
        </Switch>
    </div>
  );
}

export default App;
