import React, { useContext, useState, useEffect } from "react";

import { API } from "./../../../config/api";
import { CartContext } from "../../../Context/cartContext";

import { FiMail, FiPhone } from "react-icons/fi";
import { FaTransgender } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

import "./profile.css";

function Profile() {
  const [state, dispatch] = useContext(CartContext);

  // get book with id user
  const [booksUser, setBooks] = useState([]);

  // get user
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);

        // bisa
        const res = await API.get(`/users`);

        // tidak bisa
        // const res = await API.get(`/user/1`);
        // const res = await API.get(`/User/${state.user?.id}`);

        // console.log(res);

        // console.log(state.user?.id);

        setUsers(res.data.data.users);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    loadUsers();
  }, []);

  // console.log(users);

  // get book
  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true);

        const res = await API.get(`/user/${state.user?.id}`);

        setBooks(res.data.data.User.book);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    loadBooks();
  }, []);

  // edit photo profile
  const [formEdit, setFormEdit] = useState({
    avatar: ""
  });

  const [edit, setEdit] = useState([]);

  const { avatar } = formEdit;

  const handleChange = e => {
    setFormEdit({ ...formEdit, [e.target.name]: e.target.value });
  };

  const handleStore = async e => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

      const body = JSON.stringify({
        avatar
      });

      const res = await API.patch(`/user/${state.user?.id}`, body, config);

      setEdit([...edit, res.data.data.User]);
      alert("Succses");
    } catch (err) {
      console.log(err);
      alert("Failed");
    }
  };

  return (
    <div className="box-profile">
      <div className="profile-data">
        <h1 style={{ marginTop: "3vh" }}>Profile</h1>
        <div className="cover-profile">
          <ul>
            <li>
              <FiMail className="logo-icon" />
              <span>
                <h5>{state.user?.email}</h5>
                <p>Email</p>
              </span>
            </li>
            <li>
              <FaTransgender className="logo-icon" />
              <span>
                <h5>{state.user?.gender}</h5>
                <p>Gender</p>
              </span>
            </li>
            <li>
              <FiPhone className="logo-icon" />
              <span>
                <h5>{state.user?.phone}</h5>
                <p>Mobile Phone</p>
              </span>
            </li>
            <li>
              <GrLocation className="logo-icon" />
              <span>
                <h5>{state.user?.address}</h5>
                <p>Address</p>
              </span>
            </li>
          </ul>
          <div className="box-gambar">
            <img src={state.user?.avatar} alt="photo-profile" />

            <form onSubmit={e => handleStore(e)}>
              <input
                onChange={e => handleChange(e)}
                type="text"
                value={avatar}
                name="avatar"
                placeholder="e.g https//googledrive.id=?"
              />
              <button type="submit">Change Photo Profile</button>
            </form>
          </div>
        </div>
        <div className="list-book">
          <h1 style={{ marginTop: "2vh" }}>My Books</h1>
          <ul>
            {loading || !booksUser ? (
              <h1> Loading... </h1>
            ) : (
              booksUser.map((book, index) =>
                book.status == "Approved" ? (
                  <li>
                    <div style={{ marginTop: "5px" }}>
                      <img src={book.thumbnail} alt="book" />
                      <h5>{book.title}</h5>
                      <p>{book.title}</p>
                    </div>
                  </li>
                ) : (
                  <li>
                    <div style={{ marginTop: "5px" }}>
                      <img src={book.thumbnail} alt="book" />
                      <h5>{book.title}</h5>
                      <p>{book.title}</p>
                      <div className="overlay">
                        <h5>Waiting to be approved</h5>
                      </div>
                    </div>
                  </li>
                )
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
