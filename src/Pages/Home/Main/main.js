import React, { useState, useEffect } from "react";

import { API, urlAsset } from "./../../../config/api";

import { Link, useHistory } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";

import "./main.css";

const Main = () => {
  const history = useHistory();
  const [booksUser, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true);

        const res = await API.get("/books");

        setBooks(res.data.data.books);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    loadBooks();
  }, []);

  // console.log(booksUser);

  return (
    <div className="box-main">
      <main>
        <div className="cover-img">
          <div className="des">
            <h1>
              Share, read and <i> love </i>
            </h1>
            <p> Reading is fascinating </p>
          </div>
          <img
            src={require("./../../../Components/book/Fix-You-by-ACI-Nouraicha-Afta1.png")}
            alt=""
          />
        </div>
        <div className="list-book">
          <div className="navigasi">
            <h1> List Book </h1>
            <div>
              <div className="mb-2">
                {["left"].map(direction => (
                  <DropdownButton
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    title={` Category `}
                    variant="light"
                  >
                    <Dropdown.Item eventKey="1"> Romance </Dropdown.Item>
                    <Dropdown.Item eventKey="2"> Comedy </Dropdown.Item>
                    <Dropdown.Item eventKey="4"> Sci - Fi </Dropdown.Item>
                    <Dropdown.Item eventKey="5"> History </Dropdown.Item>
                    <Dropdown.Item eventKey="6"> Documentacy </Dropdown.Item>
                  </DropdownButton>
                ))}
              </div>
            </div>
          </div>
          <ul>
            {loading || !booksUser ? (
              <h1> Loading... </h1>
            ) : (
              booksUser.map(book => (
                <li onClick={() => history.push(`/detail/${book.id}`)}>
                  <div>
                    <img src={urlAsset.thumbnail + book.thumbnail} alt="book" />
                    <h5> {book.title} </h5>
                    <p> {book.user_id.fullName} </p>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Main;
