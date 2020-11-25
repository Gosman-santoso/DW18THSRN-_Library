import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

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
