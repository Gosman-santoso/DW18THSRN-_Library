import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { CartContext } from "./../Context/cartContext";
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";

function HeaderAdm() {
  const [state, dispatch] = useContext(CartContext);
  return (
    <div
      style={{
        position: "relative",
        top: "0",
        zIndex: "13",
        width: "100%",
        background: "white"
      }}
    >
      <div
        style={{
          display: "flex",
          width: "75%",
          height: "13vh",
          margin: "auto",
          justifyContent: "space-between",
          // background: "salmon",
          alignItems: "center"
        }}
      >
        <Link to="/mainAdm" style={{ textDecoration: "none" }}>
          <div
            className="icon"
            style={{
              display: "flex"
            }}
          >
            <img
              style={{ width: "50px", height: "50px" }}
              src={require("./../Components/img/Icon.png")}
              alt=""
            />
            <h1>
              <i>Lib'rary</i>
            </h1>
          </div>
        </Link>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "40vh",
            justifyContent: "space-between"
            // background: "lightgreen"
          }}
        >
          <ul
            style={{
              listStyle: "none",
              // background: "salmon",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "60%"
            }}
          ></ul>

          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <img
                src={require("./../Components/img/Ellipse1.png")}
                alt=""
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "2px solid gray"
                }}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Link to="/mainAdm" style={{ color: "black" }}>
                <Dropdown.Item href="#/action-1">
                  <li>Verifycation</li>
                </Dropdown.Item>
              </Link>

              <Link to="/bookAdm" style={{ color: "black" }}>
                <Dropdown.Item href="#/action-2">
                  <li>Add Book</li>
                </Dropdown.Item>
              </Link>

              <Link
                to="/"
                style={{ color: "black" }}
                onClick={() => {
                  dispatch({
                    type: "LOGOUT"
                  });
                }}
              >
                <Dropdown.Item href="#/action-3">
                  <li>Logout</li>
                </Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default HeaderAdm;
