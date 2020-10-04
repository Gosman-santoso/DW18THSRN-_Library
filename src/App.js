import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CartContextProvider } from "./Context/cartContext";

import PrivateRoute from "./Pages/Home/privateRoute";

import "./App.css";

// pages
import Landing from "./Pages/Landing/landing";
import Main from "./Pages/Home/Main/main";
import Head from "./Pages/Home/Head/head";
import Home from "./Pages/Home/home";
import Detail from "./Pages/Home/Detail/detail";
import Profile from "./Pages/Home/Profile/profile";
import Library from "./Pages/Home/Library/library";
import AddBook from "./Pages/Home/AddBook/addBook";
import Read from "./Pages/Home/Detail/read";

import AdmMain from "./Admin/admMain";
import Verify from "./Admin/verification";
import AddBookAdmin from "./Admin/addBook";

const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <Head />
        <Switch>
          <Route exact path="/" component={Landing} />
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute path="/main" exact component={Main} />
          <PrivateRoute path="/detail" exact component={Detail} />
          <PrivateRoute path="/profile" exact component={Profile} />
          <PrivateRoute path="/library" exact component={Library} />
          <PrivateRoute path="/addbook" exact component={AddBook} />
          <PrivateRoute path="/read" exact component={Read} />

          <Route path="/mainAdm" exact component={AdmMain} />
          <Route path="/verify" exact component={Verify} />
          <Route path="/bookAdm" exact component={AddBookAdmin} />
        </Switch>
      </Router>
    </CartContextProvider>
  );
};

export default App;
