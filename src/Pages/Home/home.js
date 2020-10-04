import React, { Component, useContext } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Main from "./Main/main";

import "./home.css";

function Home() {
  return (
    <Router>
      <div className="box-home">
        <Main />
      </div>
    </Router>
  );
}

export default Home;
