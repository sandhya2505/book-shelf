import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Books from "./components/Book/Books";
import AddBook from "./components/AddBook/AddBook";
import BookDetails from "./components/Book/BookDetails";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div
        style={{
          padding: "8px",
        }}
      >
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/addBooks" element={<AddBook />} exact />
          <Route path="/books/:id" element={<BookDetails />} exact />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;


