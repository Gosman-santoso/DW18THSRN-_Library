import React, { useState, useContext, useEffect } from "react";

import { CartContext } from "../../../Context/cartContext";
import { API } from "../../../config/api";
import { BiBookmark } from "react-icons/bi";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useMutation } from "react-query";
import { MdAttachFile } from "react-icons/md";
import { Alert } from "react-bootstrap";

import "./addBook.css";

function AddBook() {
  // get user id

  const [state] = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const SUPPORTED_FORMATS_IMAGE = ["image/jpg", "image/jpeg", "image/png"];
  const SUPPORTED_FORMATS_FILE = ["application/pdf"];

  const {
    handleSubmit,
    getFieldProps,
    errors,
    touched,
    values,
    resetForm,
    setFieldValue
  } = useFormik({
    initialValues: {
      userId: state.user.id,
      categoryId: "",
      title: "",
      publication: "",
      pages: "",
      ISBN: "",
      file: "",
      thumbnail: "",
      status: "Waiting"
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required()
        .min(3),
      publication: Yup.string().required(),
      pages: Yup.number().required(),
      ISBN: Yup.string()
        .matches(/^[0-9]+$/, "ISBN only accepts input numbers from 0-9")
        .required()
        .min(8),
      thumbnail: Yup.mixed()
        .required()
        .test(
          "fileFormat",
          "Sorry only accept image filetype",
          value => value && SUPPORTED_FORMATS_IMAGE.includes(value.type)
        ),
      file: Yup.mixed()
        .required()
        .test(
          "fileFormat",
          "Sorry only accept epub/pdf filetype",
          value => value && SUPPORTED_FORMATS_FILE.includes(value.type)
        )
    }),
    onSubmit: values => {
      console.log(values);

      storeLiterature(values);
      resetForm({ values: "" });
    }
  });

  const [storeLiterature, { isLoading, error }] = useMutation(async values => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      const formData = new FormData();
      formData.append("userId", values.userId);
      formData.append("categoryId", values.categoryId);
      formData.append("title", values.title);
      formData.append("categoryId", values.categoryId);
      formData.append("publication", values.publication);
      formData.append("pages", values.pages);
      formData.append("ISBN", values.ISBN);
      formData.append("file", values.file);
      formData.append("thumbnail", values.thumbnail);
      formData.append("status", values.status);

      const res = await API.post("/books", formData, config);
      setShowAlert(true);
    } catch (err) {
      console.log(err.response.data.message);
      setErrorMsg(err.response.data.message);
    }
  });

  return (
    <div className="box-add">
      <div className="box-input">
        <h1>Add Book</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Tittle"
            {...getFieldProps("title")}
          />
          <input
            type="date"
            name="publication"
            placeholder="Publication Date"
            {...getFieldProps("publication")}
          />
          <select name="categoryId" {...getFieldProps("category")}>
            <option value="1">Romance</option>
            <option value="2">Comedy</option>
            <option value="3">Sci-Fi</option>
            <option value="4">History</option>
            <option value="5">Documentary</option>
            <option value="6">Education</option>
          </select>
          <input
            type="number"
            name="pages"
            placeholder="Pages"
            {...getFieldProps("pages")}
          />
          <input
            type="number"
            name="ISBN"
            placeholder="ISBN"
            {...getFieldProps("ISBN")}
          />
          <textarea
            type="text"
            name="aboutBook"
            placeholder="About this book"
            {...getFieldProps("about")}
          ></textarea>

          <div className="attach-thumbnail">
            <input
              type="file"
              placeholder="Thumbnail"
              onChange={e => {
                setFieldValue("thumbnail", e.target.files[0]);
              }}
              id="thumbnail"
              style={{ display: "none" }}
            />
            <label for="thumbnail">
              {values.thumbnail.name
                ? values.thumbnail.name
                : "Attache thumbnail"}
              <MdAttachFile />
            </label>
            <span className="help-block text-danger">
              {touched.thumbnail ? errors.thumbnail : ""}
            </span>
          </div>

          <div className="attach-file">
            <input
              type="file"
              placeholder="File"
              onChange={e => {
                setFieldValue("file", e.target.files[0]);
              }}
              id="file"
              style={{ display: "none" }}
            />
            <label for="file">
              {values.file.name ? values.file.name : "Attache file pdf"}
              <MdAttachFile style={{ color: "white" }} />
            </label>
            <span className="help-block text-danger">
              {touched.file ? errors.file : ""}
            </span>
          </div>

          <button className="add-btn" type="submit">
            Add Book <BiBookmark />
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
