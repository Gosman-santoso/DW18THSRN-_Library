import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { MdLibraryBooks, MdLibraryAdd } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { CartContext } from "../../../Context/cartContext";

import "./head.css";

const Head = () => {
  const [state, dispatch] = useContext(CartContext);
  return (
    <nav className="box-head">
      <div className="head">
        <Link to="/main" style={{ textDecoration: "none", color: "black" }}>
          <div className="icon">
            <img src={require("./../../../Components/img/Icon.png")} alt="" />
            <h1>
              <i>Lib'rary</i>
            </h1>
          </div>
        </Link>

        <div className="photo">
          <div>
            <img src={state.user?.avatar} alt="photo" />
          </div>
          <h2> {state.user?.fullName} </h2>
        </div>
      </div>

      <div className="menu">
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <p className="nav-btn">
            <CgProfile style={{ fontSize: "25px" }} /> Profile
          </p>
        </Link>
        <Link to="/library" style={{ textDecoration: "none" }}>
          <p className="nav-btn">
            <MdLibraryBooks style={{ fontSize: "25px" }} /> My Library
          </p>
        </Link>
        <Link to="/addbook" style={{ textDecoration: "none" }}>
          <p className="nav-btn">
            <MdLibraryAdd style={{ fontSize: "25px" }} /> Add Book
          </p>
        </Link>
      </div>

      <div className="logout">
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => {
            dispatch({
              type: "LOGOUT"
            });
          }}
        >
          <p className="nav-btn">
            <IoIosLogOut style={{ fontSize: "25px" }} /> Logout
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Head;
