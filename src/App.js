import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

// pages
import Landing from "./Pages/Landing/landing";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        
      </Switch>
    </Router>
  );
}

export default App;
