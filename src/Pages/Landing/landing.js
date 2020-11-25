import React from "react";

import LoginRegister from "../../Components/atom/login-register/login-register";

import "./landing.css";

function Landing() {
  return (
    <div>
      <div className="box-landing">
        <div className="vektor1">
          <img src={require("./../../Components/img/Vector1.png")} alt="" />
        </div>
        <header>
          <img src={require("./../../Components/img/Icon.png")} alt="" />
          <h1>Lib'rary</h1>
        </header>
        <div className="cover">
          <h1>
            <i>Your</i> library anywhere
          </h1>
          <p>
            Sign-up today and recieve unlimited access to all of your reading -
            share your book.
          </p>
          <LoginRegister />
        </div>
      </div>
    </div>
  );
}

export default Landing;
