import React, {useState} from 'react';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Modal from 'react-modal';

// pages
import Landing from "./Pages/Landing/landing";
import Home from "./Pages/Home/home";

function App() {

  return (
    <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </Router>     
    </div>
  );
}

export default App;
