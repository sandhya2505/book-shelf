import React from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Book = (props) => {
  const history = useNavigate();
  const { _id, bookname, description, author, image, price } = props.book;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/books"))
      .then(() => history("/"));
  };
  return (
    <>
      <div
        style={{
          background: "none",
          width: "259px",
          height: "460px",
          color: "white",
          padding: "5px",
        }}
      >
        <img
          src={image}
          alt="bookImg"
          style={{
            width: "100%",
            height: "65%",
            objectFit: "fill",
            borderRadius: "10px",
          }}
        />
        <h4
          style={{
            color: "white",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            fontSize: "1.4rem",
            marginLeft: "5px",
            marginTop: "2px",
          }}
        >
          {bookname.slice(0, 15)}...
        </h4>
        <article
          style={{
            fontFamily: "sans-serif",
            fontWeight: "lighter",
            fontSize: "15px",
            color: "#75C2F6",
            textDecoration: "underline",
            marginLeft: "5px",
          }}
        >
          By{author.slice(0, 25)}
        </article>

        <h2
          style={{
            fontSize: "1.7rem",
            color: "red",
            marginLeft: "5px",
          }}
        >
          Rs. {price}
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            LinkComponent={Link}
            to={`/books/${_id}`}
            variant="contained"
            sx={{
              marginRight: "2px",
              backgroundColor: "green",
              ":hover": {
                backgroundColor: "green",
                color: "black",
              },
              ":active": {
                color: "green",
                background: "none",
                border: "1px solid green",
              },
            }}
          >
            Update
          </Button>
          <Button
            onClick={deleteHandler}
            variant="contained"
            sx={{
              marginLeft: "2px",
              backgroundColor: "red",
              ":hover": {
                backgroundColor: "red",
                color: "black",
              },
              ":active": {
                color: "red",
                background: "none",
                border: "1px solid red",
              },
            }}
          >
            Delete
          </Button>
          {/* <p>{description.slice(0, 20)}...</p> */}
        </div>
      </div>
    </>
  );
};

export default Book;
