import React from "react";

import { BiBookmark } from "react-icons/bi";
import { IoIosAttach } from "react-icons/io";

import "./addBook.css";

function AddBook() {
  return (
    <div className="box-add">
      <div className="box-input">
        <h1>Add Book</h1>
        <form action="">
          <input type="text" id="title" placeholder="Tittle" />
          <input type="date" id="date" placeholder="Publication Date" />
          <input type="text" id="category" placeholder="Category" />
          <input type="number" id="pages" placeholder="Pages" />
          <input type="number" id="pages" placeholder="ISBN" />
          <textarea
            type="text"
            id="textarea"
            placeholder="About this book"
          ></textarea>
        </form>

        <button className="attach">
          <input type="file" /> <IoIosAttach />
        </button>
        <button className="add-btn">
          Add Book <BiBookmark />
        </button>
      </div>
    </div>
  );
}

export default AddBook;
