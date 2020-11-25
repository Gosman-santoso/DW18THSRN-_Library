import React, { useContext } from "react";

import { API, urlAsset } from "./../../../config/api";
import { CartContext } from "../../../Context/cartContext";

import { useMutation, useQuery } from "react-query";
import { useParams, useHistory } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";
import "./detail.css";

function Detail() {
  const [state, dispatch] = useContext(CartContext);
  // get Detail Book
  const history = useHistory();
  const { id } = useParams();
  const idUser = state.user?.id;

  const { isLoading, data: bookData } = useQuery("getBook", () =>
    API.get(`/book/${id}`)
  );

  // get library
  const {
    isLoading: loadingLibrary,
    data: libraryData,
    refetch
  } = useQuery("getLibrary", () => API.get(`library/${id}/${idUser}`));

  // add library
  const [addLibrary] = useMutation(async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      };
      const body = JSON.stringify({
        bookId: id,
        userId: idUser
      });
      await API.post(`/libraries`, body, config);
      refetch();
    } catch (err) {
      alert(err);
      console.log(err);
    }
  });

  const [removeLibrary] = useMutation(async () => {
    try {
      await API.delete(`/library/${id}/${idUser}`);
      refetch();
    } catch (err) {
      alert(err);
      console.log(err);
    }
  });
  return (
    <div className="box-detail">
      {isLoading || loadingLibrary || !bookData ? (
        <p>Loading...</p>
      ) : (
        <main>
          <div className="cover-detail">
            <img
              src={urlAsset.thumbnail + bookData.data.data.book.thumbnail}
              alt="book"
            />
            <div className="des-detail">
              <h1>{bookData.data.data.book.title}</h1>
              <p>{bookData.data.data.book.user_id?.fullName}</p>
              <ul>
                <li>
                  <h2>Publication date</h2>
                  <p>{bookData.data.data.book.publication}</p>
                </li>
                <li>
                  <h2>Category</h2>
                  <p>{bookData.data.data.book.category_id?.name}</p>
                </li>
                <li>
                  <h2>Pages</h2>
                  <p>{bookData.data.data.book.pages}</p>
                </li>
                <li>
                  <h2>ISBN</h2>
                  <p>{bookData.data.data.book.ISBN}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="about">
            <h1>About This Book</h1>
            <p>{bookData.data.data.book.aboutBook}</p>

            <div className="boxBtn">
              <>
                {libraryData.data.data.library == null ? (
                  <button
                    className="bookmark active"
                    onClick={() => addLibrary()}
                  >
                    Add Collection <FaRegBookmark />
                  </button>
                ) : (
                  <button
                    className="bookmark active"
                    onClick={() => removeLibrary()}
                  >
                    Remove Collection <FaRegBookmark />
                  </button>
                )}
              </>
              <div onClick={() => history.push(`/read`)}>
                <button>Read Book ></button>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default Detail;
