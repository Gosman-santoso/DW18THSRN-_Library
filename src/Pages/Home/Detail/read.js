import React from "react";

import { ReactReader } from "react-reader";
import { Link, useParams, useHistory } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import Alice from "./../../../Components/book/Alices Adventures in Wonderland.epub";

function Read() {
  const { id } = useParams();
  const history = useHistory();

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <Link onClick={() => history.push(`detail/${id}`)}>
        <button
          style={{
            position: "absolute",
            zIndex: "99",
            top: "3%",
            right: "3%",
            border: "none",
            background: "transparent"
          }}
        >
          <AiOutlineClose
            style={{
              textDecoration: "none",
              fontSize: "25px",
              color: "rgb(100,100,100)"
            }}
          />
        </button>
      </Link>
      <ReactReader
        url={Alice}
        tittle={"The Little Prince"}
        location={"epubcfi(/6/2[cover]!/6)"}
        locationChanged={epubcifi => console.log(epubcifi)}
      />
    </div>
  );
}

export default Read;
