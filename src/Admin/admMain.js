import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./../Pages/Home/privateRoute";

import Verify from "./verification";
import AddBookAdmin from "./addBook";
import Header from "./headerAdmin";

const AdmMain = () => {
  return (
    <div>
      <Header />
      <Verify />
    </div>
  );
};

export default AdmMain;
