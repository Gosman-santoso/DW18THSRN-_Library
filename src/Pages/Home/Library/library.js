import React, { useContext, useState, useEffect } from "react";

import { API, urlAsset } from "./../../../config/api";
import { CartContext } from "../../../Context/cartContext";
import { useHistory } from "react-router-dom";

import "./library.css";

function Library() {
  const [state, dispatch] = useContext(CartContext);
  const history = useHistory();

  // // get book with id user
  const [library, setLibrary] = useState([]);
  const [booksUser, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [detailBook, setDetailBook] = useState([]);

  useEffect(() => {
    const loadLibrary = async () => {
      try {
        setLoading(true);

        const res = await API.get(`/user/${state.user?.id}`);
        setLibrary(res.data.data.User.library);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    loadLibrary();
  }, []);

  // console.log(library.bookId);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true);

        const res = await API.get(`/user/${state.user?.id}`);
        setDetailBook(res.data.data.User.library);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    loadBooks();
  }, []);

  return (
    <div className="box-library">
      <div className="list-book">
        <h1>List Book</h1>
        <ul>
          {loading || !booksUser ? (
            <h1>Loading</h1>
          ) : (
            detailBook.map(bookUser => (
              <li onClick={() => history.push(`/detail/${bookUser.id}`)}>
                <div>
                  <img
                    src={urlAsset.thumbnail + bookUser.book?.thumbnail}
                    alt="book"
                  />
                  <h5>{bookUser.book?.title}</h5>
                  <p>{bookUser.book?.title}</p>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Library;
