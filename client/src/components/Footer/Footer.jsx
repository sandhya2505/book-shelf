import React from "react";

const Footer = () => {
  return (
    <>
      <div
        className="d-flex align-align-items-center justify-content-center text-white"
        style={{
          marginBottom: "5px",
          marginLeft: "15px",
          width: "98%",
          height: "40px",
          borderRadius: "10px",
          backgroundColor: "#201926",
          fontFamily: "sans-serif",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          font: "1em",
        }}
      >
        <h5
          style={{
            paddingTop: "5px",
          }}
        >
          @ Developed By Sandhya Nayak
        </h5>
      </div>
    </>
  );
};

export default Footer;
