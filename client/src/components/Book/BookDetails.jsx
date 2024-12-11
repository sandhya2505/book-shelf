import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BookDetails.css";

const BookDetails = () => {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`https://book-shelf-backend-f8kz.onrender.com/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`https://book-shelf-backend-f8kz.onrender.com/books/${id}`, {
        bookname: String(inputs.bookname),
        author: String(inputs.author),
        description: String(inputs.description),
        image: String(inputs.image),
        price: Number(inputs.price),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => history("/"))
      .then(() => history("https://book-shelf-backend-f8kz.onrender.com/books"));
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="Box">
        {inputs && (
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
                Update Book
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default BookDetails;
