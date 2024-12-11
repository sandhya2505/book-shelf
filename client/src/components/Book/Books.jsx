import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import { Box } from "@mui/material";

const URL = "https://book-shelf-backend-f8kz.onrender.com/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  // console.log(books);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "flex-start",
          border: "2px solid black",
          margin: "5px",
          borderRadius: "10px",
          backgroundColor: "#201926",
          margin: "5px",
          padding: "10px",
        }}
      >
        {books &&
          books.map((book, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #a2ff86",
                borderRadius: "10px",
                width: "260px",
                height: "450px",
              }}
            >
              <Book book={book} />
            </div>
          ))}
      </Box>
    </>
  );
};

export default Books;
