import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./../Context/cartContext";

function HeaderAdm() {
  const [state, dispatch] = useContext(CartContext);
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        zIndex: "13",
        width: "100%",
        background: "white"
      }}
    >
      <div
        style={{
          display: "flex",
          width: "80%",
          height: "13vh",
          margin: "auto",
          justifyContent: "space-between",
          //   background: "salmon",
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
          >
            <Link to="/bookAdm" style={{ color: "black" }}>
              <li>Add Book</li>
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
              <li>Logout</li>
            </Link>
          </ul>
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
        </div>
      </div>
    </div>
  );
}

export default HeaderAdm;
