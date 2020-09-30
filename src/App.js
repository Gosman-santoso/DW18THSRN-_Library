import React, {useState} from 'react';

// import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

import Modal from 'react-modal';

import './App.css';
import './Pages/Landing/landing.css';
import './Pages/Login/login.css';

// pages
// import Landing from "./Pages/Landing/landing";
// import Login from "./Pages/Login/login";
// import Register from "./Pages/Register/register";

function App() {
  const [loginOpen, setloginOpen] = useState(false);
  const [registerOpen, setregisterOpen] = useState(false);

  return (
    <div>
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router> */}
      

      {/* Landing */}

      <div className="box-landing">
          <div className="vektor1">
              <img src={require('./Components/img/Vector1.png')} alt=""/>
          </div>
          <header>
              <img src={require('./Components/img/Icon.png')} alt=""/>
              <h1>Lib'rary</h1>
          </header>
          <div className="cover">
              <h1><i>Your</i> library anywhere</h1>
              <p>Sign-up today and recieve unlimited access to all of your reading - share your book.</p>
              
              <div className="sign-button">
                  <button onClick={() => setregisterOpen(true)} className="active">Sign Up</button>
                  <button onClick={() => setloginOpen(true)}>Sign In</button>
              </div>
          </div>
      </div>

      {/* Akhir Landing */}



      {/* Login */}

      <Modal isOpen = {loginOpen}>
        <button onClick={() => setloginOpen(false)}><strong>X</strong></button>
        <div className="box-sign">
            <div className="sign-in">
                <h1>Sign In</h1>
                <form action="">
                    <input type="text" name="id" id="id" placeholder="Email"/> <br/>
                    <input type="text" name="password" id="password" placeholder="Password"/>
                    <button className="sign-submit">Sign in</button>
                </form>
                <p>Don't have an account ? Klik <button onClick={() => {
                    setregisterOpen(true);
                    setloginOpen(false); 
                }}><strong>Here</strong></button></p>
                
            </div>
        </div>
      </Modal>
      
      {/* Akhir Login */}



      {/* Register */}

      <Modal isOpen = {registerOpen}>
        <button onClick={() => setregisterOpen(false)}><strong>X</strong></button>
        <div className="box-sign">
            <div className="sign-in">
                <h1>Sign Up</h1>
                <form action="">
                    <input type="text" name="id" id="id" placeholder="Email"/> <br/>
                    <input type="text" name="password" id="password" placeholder="Password"/>
                    <input type="text" name="fullName" id="fullName" placeholder="Full Name"/>

                    <div className="form-group">
                      <label htmlFor="title">Gender</label>
                      <select name="gender" id="">
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                      </select>
                    </div>

                    <input type="text" name="phone" id="phone" placeholder="Phone"/>
                    <input type="text" name="address" id="address" placeholder="Address"/>
                    <button className="sign-submit">Sign Up</button>
                </form>
                <p>Already have an account ? Klik <button onClick={() => {
                    setloginOpen(true);
                    setregisterOpen(false);
                }}><strong>Here</strong></button></p>
            </div>
        </div>
      </Modal>

      {/* Akhir Register */}



  </div>
  );
}

export default App;
