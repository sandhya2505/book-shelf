import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

const AddBook = () => {
  const URL = "http://localhost:5000/books/";
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    bookname: "",
    author: "",
    description: "",
    image: "",
    price: "",
  });

  // adding Book value
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "value", e.target.value);
  };

  // Send Request to database
  const sendRequest = async () => {
    await axios
      .post(URL, {
        bookname: String(inputs.bookname),
        author: String(inputs.author),
        description: String(inputs.description),
        image: String(inputs.image),
        price: Number(inputs.price),
      })
      .then((res) => res.data);
  };

  // Submit Book value
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history(URL));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "#201926",
          marginTop: "5px",
          color: "white",
          borderRadius: "10px",
        }}
        className="box"
      >
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input
              name="bookname"
              value={inputs.bookname}
              onChange={handleChange}
              type="text"
              required
            />
            <span>Enter Book Name</span>
          </div>
          <div className="inputBox">
            <input
              name="author"
              value={inputs.author}
              onChange={handleChange}
              type="text"
              required
            />
            <span>Enter Author</span>
          </div>
          <div className="inputBox">
            <input
              name="description"
              value={inputs.description}
              onChange={handleChange}
              type="text"
              required
            />
            <span>Enter Description</span>
          </div>
          <div className="inputBox">
            <input
              name="image"
              value={inputs.image}
              onChange={handleChange}
              type="text"
              required
            />
            <span>Enter Image URL</span>
          </div>
          <div className="inputBox">
            <input
              name="price"
              value={inputs.price}
              onChange={handleChange}
              type="number"
              required
            />
            <span>Enter Price</span>
          </div>
          <div className="Btn">
            <button className="Button" type="submit">
              Add Book
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBook;
