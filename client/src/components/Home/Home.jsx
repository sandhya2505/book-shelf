import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Img from "../../assets/book girl.jpg";

const Home = () => {
  const homeImg =
    "https://images.unsplash.com/photo-1603831905217-8c2f485a2e20?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <div
        className="BOX container-fluid d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: "#201926",
          height: "90.5vh",
          margin: "5px",
          marginBottom: "0",
          color: "white",
          borderRadius: "10px",
        }}
      >
        <div className="main">
          <h1
            style={{
              fontWeight: "bolder",
              letterSpacing: ".1em",
              color: "#a0defb",
            }}
          >
            BOOKS SHELF
          </h1>
          <h2
            style={{
              fontWeight: "bold",
              letterSpacing: ".1em",
            }}
          >
            FOR YOU
          </h2>
          <p
            className="mb-0"
            style={{
              color: "silver",
              fontWeight: "bold",
              letterSpacing: ".1em",
              textTransform: "uppercase",
            }}
          >
            Checkout The Books From Here.
          </p>
          <button className="btn SubBtn mt-1">
            <Link
              to={"/books"}
              style={{
                backgroundColor: "#a0defb",
                color: "black",
                textDecorationLine: "none",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              VIEW BOOKS
            </Link>
          </button>
        </div>

        <div className="right">
          <img className="homeImg img-fluid" src={homeImg} alt="home-img" />
        </div>
      </div>
    </>
  );
};

export default Home;
