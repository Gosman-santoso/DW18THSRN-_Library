import React, { useEffect, useContext } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

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

import { API, setAuthToken } from "./config/api";
import { CartContext } from "./Context/cartContext";

// if token avaliable in local storage then set default header for auth
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const [state, dispatch] = useContext(CartContext);

  // use effect will be executed after all runs
  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await API.get("/auth");

        dispatch({
          type: "USER_LOADED",
          payload: res.data.data.user
        });
      } catch (err) {
        dispatch({
          type: "AUTH_ERROR"
        });
      }
    };

    loadUser();
  }, []);

  return (
    <BrowserRouter>
      <Head />
      <Switch>
        <Route exact path="/" component={Landing} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute path="/main" exact component={Main} />
        <PrivateRoute path="/detail/:id" exact component={Detail} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <PrivateRoute path="/library" exact component={Library} />
        <PrivateRoute path="/addbook" exact component={AddBook} />
        <PrivateRoute path="/read" exact component={Read} />

        <Route path="/mainAdm" exact component={AdmMain} />
        <Route path="/verify" exact component={Verify} />
        <Route path="/bookAdm" exact component={AddBookAdmin} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
