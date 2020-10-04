import React from "react";
import DataBook from "./../Components/book/dataBook.json";

import { Table } from "react-bootstrap";
import { AiFillCheckCircle } from "react-icons/ai";

function Verify() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "90vh",
        margin: "auto",
        position: "relative",
        zIndex: "10",
        background: "white"
      }}
    >
      <div
        style={{
          width: "80%",
          margin: "auto",
          fontSize: "15px",
          paddingTop: "20vh"
          // background: "salmon"
        }}
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Users or Author</th>
              <th>ISBN</th>
              <th>E-book</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {DataBook.map((data, index) => {
              return (
                <tr>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.ISBN}</td>
                  <td>{data.title}</td>
                  {/* <td>{data.status}</td> */}
                  <td
                    style={{
                      color:
                        data.status == "approve"
                          ? "#0ACF83"
                          : data.status == "cancel"
                          ? "#FF0742"
                          : "#F7941E"
                    }}
                  >
                    {data.status == "approve"
                      ? "Approve"
                      : data.status == "cancel"
                      ? "Cancel"
                      : "Waiting to be verified"}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {data.status == "approve" ? (
                      <AiFillCheckCircle
                        style={{ color: "#0ACF83", fontSize: "30px" }}
                      />
                    ) : data.status == "cancel" ? (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          width: "100%"
                        }}
                      >
                        <button
                          style={{
                            background: "#FF0742",
                            padding: "8px 15px",
                            color: "white",
                            borderRadius: "5px",
                            border: "none"
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          style={{
                            background: "#0ACF83",
                            padding: "8px 15px",
                            color: "white",
                            borderRadius: "5px",
                            border: "none"
                          }}
                        >
                          Approve
                        </button>
                      </div>
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          width: "100%"
                        }}
                      >
                        <button
                          style={{
                            background: "#FF0742",
                            padding: "8px 15px",
                            color: "white",
                            borderRadius: "5px",
                            border: "none"
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          style={{
                            background: "#0ACF83",
                            padding: "8px 15px",
                            color: "white",
                            borderRadius: "5px",
                            border: "none"
                          }}
                        >
                          Approve
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Verify;
