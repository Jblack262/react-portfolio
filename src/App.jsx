// import React, { useState } from 'react';

import { Route, Switch } from 'react-router-dom';

import { Home, Error, About, Projects, Resume, Contact} from './pages/index';

import {Navigation} from './components/index';
// import {FiMail} from 'react-icons/fi';


function App() {
  // const [open, setOpen] = useState(false);
  return (
    <div>
      <Navigation />
      
        <Switch>
            <Route path="/" exact component={() => <div>
              <Home />
              <About />
              <Projects />
              <Resume />
              <Contact />
            </div>} />


            <Route exact component={() => <Error />} />
        </Switch>
    </div>
  );
}

export default App;
