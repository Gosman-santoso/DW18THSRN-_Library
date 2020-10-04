import React, { useState, useContext } from "react";

import { Button, Modal, InputGroup } from "react-bootstrap";
import { CartContext } from "../../Context/cartContext";
import { Link, useHistory } from "react-router-dom";

import "./landing.css";
import "./../Login/login.css";

function Landing() {
  const [loginOpen, setloginOpen] = useState(false);
  const [registerOpen, setregisterOpen] = useState(false);

  const [show, setShow] = useState(false);
  const history = useHistory();

  const loginClose = () => setloginOpen(false);
  const loginshow = () => setloginOpen(true);

  const registerClose = () => setregisterOpen(false);
  const registerShow = () => setregisterOpen(true);

  const [state, dispatch] = useContext(CartContext);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (email === "user@gmail" && password === "123") {
      history.push("/main");
      console.log("Succses");
      dispatch({
        type: "LOGIN"
      });
    } else if (email === "admin@gmail" && password === "123") {
      history.push("/mainAdm");
      dispatch({
        type: "LOGIN"
      });
    } else {
      console.log("Failed");
      dispatch({
        type: "LOGOUT"
      });
    }
  };

  return (
    <div>
      {/* Landing */}

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

          <div className="sign">
            {/* Awal Register */}
            <Button
              variant=""
              onClick={registerShow}
              style={{ color: "black" }}
              className="active"
              style={{ color: "white" }}
            >
              Sign Up
            </Button>
            <Modal show={registerOpen} onHide={registerClose}>
              <Modal.Header closeButton>
                <Modal.Title>Register</Modal.Title>
              </Modal.Header>
              <div className="box-input">
                <Modal.Body className="justify-content-center">
                  <input
                    type="email"
                    name="id"
                    id="id"
                    placeholder="Email"
                    style={{
                      width: "90%",
                      border: "2px solid gray",
                      margin: "auto",
                      padding: "0 10px",
                      borderRadius: "5px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center"
                    }}
                  />
                </Modal.Body>
                <Modal.Body>
                  <input
                    type="password"
                    name="pw"
                    id="pw"
                    placeholder="Password"
                    style={{
                      width: "90%",
                      border: "2px solid gray",
                      margin: "auto",
                      padding: "0 10px",
                      borderRadius: "5px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center"
                    }}
                  />
                </Modal.Body>
                <Modal.Body>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Full Name"
                    style={{
                      width: "90%",
                      border: "2px solid gray",
                      margin: "auto",
                      padding: "0 10px",
                      borderRadius: "5px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center"
                    }}
                  />
                </Modal.Body>
                <Modal.Body>
                  <select
                    name="gender"
                    id=""
                    className="form-group"
                    style={{
                      width: "90%",
                      border: "2px solid gray",
                      margin: "auto",
                      padding: "0 10px",
                      borderRadius: "5px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </Modal.Body>
                <Modal.Body>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    style={{
                      width: "90%",
                      border: "2px solid gray",
                      margin: "auto",
                      padding: "0 10px",
                      borderRadius: "5px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center"
                    }}
                  />
                </Modal.Body>
                <Modal.Body>
                  <textarea
                    name="address"
                    id="address"
                    placeholder="Adress"
                    style={{
                      width: "90%",
                      border: "2px solid gray",
                      margin: "auto",
                      padding: "0 10px",
                      borderRadius: "5px",
                      height: "70px",
                      display: "flex",
                      justifyContent: "center"
                    }}
                  ></textarea>
                </Modal.Body>
                <button
                  className="active"
                  style={{
                    width: "85%",
                    fontSize: "18px",
                    lineHeight: "24.59px",
                    padding: "10px 50px",
                    background: "#EE4622",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                    alignSelf: "flex-start",
                    color: "white",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center"
                  }}
                  onClick={() => {
                    setregisterOpen(false);
                    setloginOpen(true);
                  }}
                >
                  Register
                </button>
              </div>
              <Modal.Footer className="justify-content-center">
                <p>
                  Already have an account ? Klik{" "}
                  <button
                    onClick={() => {
                      setregisterOpen(false);
                      setloginOpen(true);
                    }}
                    class="box-submit"
                    style={{ border: "none", background: "transparent" }}
                  >
                    <strong>Here</strong>
                  </button>
                </p>
              </Modal.Footer>
            </Modal>
            {/* Akhir Register */}

            {/* Awal Login */}
            <Button
              variant=""
              onClick={loginshow}
              style={{ color: "black" }}
              className=""
              style={{ color: "black" }}
            >
              Sign In
            </Button>
            <Modal show={loginOpen} onHide={loginClose}>
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <form onSubmit={e => handleSubmit(e)}>
                <div className="box-input">
                  <Modal.Body>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      style={{
                        width: "90%",
                        border: "2px solid gray",
                        margin: "auto",
                        padding: "0 10px",
                        borderRadius: "5px",
                        height: "40px",
                        display: "flex",
                        justifyContent: "center"
                      }}
                      value={email}
                      onChange={e => handleChange(e)}
                    />
                  </Modal.Body>
                  <Modal.Body>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      style={{
                        width: "90%",
                        border: "2px solid gray",
                        margin: "auto",
                        padding: "0 10px",
                        borderRadius: "5px",
                        height: "40px",
                        display: "flex",
                        justifyContent: "center"
                      }}
                      value={password}
                      onChange={e => handleChange(e)}
                    />
                  </Modal.Body>

                  <button
                    className="active"
                    style={{
                      width: "85%",
                      fontSize: "18px",
                      lineHeight: "24.59px",
                      padding: "10px 50px",
                      background: "#EE4622",
                      borderRadius: "5px",
                      border: "none",
                      cursor: "pointer",
                      alignSelf: "flex-start",
                      color: "white",
                      margin: "auto",
                      marginBottom: "10px",
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <Link
                      to="/main"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Login
                    </Link>
                  </button>
                </div>
              </form>
              <Modal.Footer className="justify-content-center">
                <p>{state.isLogin ? "Login State" : "Not Login"}</p>
                <p>
                  Don't have an account ? Klik{" "}
                  <button
                    onClick={() => {
                      setregisterOpen(true);
                      setloginOpen(false);
                    }}
                    class="box-submit"
                    style={{ border: "none", background: "transparent" }}
                  >
                    <strong>Here</strong>
                  </button>
                </p>
              </Modal.Footer>
            </Modal>
            {/* Akhir Login */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
