import React, { useState, useContext, useEffect } from "react";

import { CartContext } from "../Context/cartContext";
import { API } from "../config/api";
import HeaderAdm from "./headerAdmin";

import { BiBookmark } from "react-icons/bi";

import "./bookAdm.css";

function BookAdm() {
  // get user id
  const [state] = useContext(CartContext);

  // add book
  const [formAdd, setFormAdd] = useState({
    title: "",
    publication: "",
    categoryId: "",
    userId: `Admin`,
    pages: "",
    ISBN: "",
    aboutBook: "",
    file: "",
    thumbnail: ""
  });

  const [book, setBook] = useState([]);

  const {
    title,
    publication,
    categoryId,
    userId,
    pages,
    ISBN,
    aboutBook,
    file,
    thumbnail
  } = formAdd;

  useEffect(() => {
    console.log(formAdd);
  }, [formAdd]);

  const handleChange = e => {
    setFormAdd({ ...formAdd, [e.target.name]: e.target.value });
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
        title,
        publication,
        categoryId,
        userId,
        pages,
        ISBN,
        aboutBook,
        file,
        thumbnail
      });

      const res = await API.post("/books", body, config);

      setBook([...book, res.data.data.books]);
      alert("Succses");
    } catch (err) {
      console.log(err);
      alert("Failed");
    }
  };

  return (
    <div className="box-AdmBook">
      <HeaderAdm />
      <div className="box-input">
        <form onSubmit={e => handleStore(e)}>
          <input
            type="text"
            value={title}
            name="title"
            placeholder="Tittle"
            onChange={e => handleChange(e)}
          />
          <input
            type="date"
            value={publication}
            name="publication"
            placeholder="Publication Date"
            onChange={e => handleChange(e)}
          />
          <select
            name="categoryId"
            value={categoryId}
            onChange={e => handleChange(e)}
          >
            <option value="1">Romance</option>
            <option value="2">Comedy</option>
            <option value="3">Sci-Fi</option>
            <option value="4">History</option>
            <option value="5">Documentary</option>
            <option value="6">Education</option>
          </select>
          <input
            type="text"
            value={userId}
            name="userId"
            placeholder="Publication Date"
            style={{ display: "none" }}
            onChange={e => handleChange(e)}
          />
          <input
            type="number"
            value={pages}
            name="pages"
            placeholder="Pages"
            onChange={e => handleChange(e)}
          />
          <input
            type="number"
            value={ISBN}
            name="ISBN"
            placeholder="ISBN"
            onChange={e => handleChange(e)}
          />
          <input
            type="text"
            value={file}
            name="file"
            placeholder="File"
            onChange={e => handleChange(e)}
          />
          <input
            type="text"
            value={thumbnail}
            name="thumbnail"
            placeholder="Thumbnail"
            onChange={e => handleChange(e)}
          />
          <textarea
            type="text"
            value={aboutBook}
            name="aboutBook"
            placeholder="About this book"
            onChange={e => handleChange(e)}
          ></textarea>
          <input type="file" className="attach" />

          <button className="add-btn" type="submit">
            Add Book <BiBookmark />
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAdm;
